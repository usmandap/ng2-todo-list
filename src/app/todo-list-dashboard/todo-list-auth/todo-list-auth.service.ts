import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    phone?: number
}

@Injectable()
export class TodoAuthService implements CanActivate {
    currentUser: firebase.User;
    $items: FirebaseListObservable<any[]>;
    subscription: Subscription;

    constructor(private router: Router, private afAuth: AngularFireAuth,
        private db: AngularFireDatabase, private toasterService: ToasterService) {
        this.subscription = afAuth.authState.subscribe((user: firebase.User) => {
            if (user) {
                this.currentUser = user
            }


        });
    }
    /**
  * @author Usman Hussain
  * This functions provides auth for login user.
  * Simple service function to provide user application access
  * @return boolean
  */
    Login(user) {
        this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(
            (success) => {
                console.log(success);
                this.toasterService.pop('success', 'Logged In', success.displayName + ' logged in successfully');
                this.router.navigate(['/list'])
            }).catch(
            (err) => {
                console.log(err);
                this.toasterService.pop('error', err.name, err.message);
                // this.error = err;
            })
    }
    /**
* @author Usman Hussain
* This functions provides auth for Register user.
* Simple service function to save user details
* @return boolean
*/
    Register(user) {
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(
            (success) => {
                console.log(success);
                this.afAuth.auth.onAuthStateChanged(((loggedinuser) => {
                    if (this.currentUser.uid === loggedinuser.uid || loggedinuser === null || this.currentUser.uid === null) {
                        loggedinuser.updateProfile({
                            displayName: user.firstname + ' ' + user.lastname,
                            phoneNumber: user.phone
                        })
                    }
                }))
                this.router.navigate(['/list'])
            }).catch(
            (err) => {
                console.log(err);
                this.toasterService.pop('error', err.name, err.message);
                // this.error = err;
            })

    }
    /**
* @author Usman Hussain
* This functions provides logout for user.
* Simple service function to logout user
* @return boolean
*/
    logoutUser() {
        this.afAuth.auth.signOut().then(() => {
            this.subscription.unsubscribe();
            window.location.reload();
        });
    }
    /**
* @author Usman Hussain
* This functions provides guard for accessing application
* Simple service function to check if the has access for following route
* @return boolean
*/
    canActivate(): Observable<boolean> {
        return this.afAuth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                }
            });
    }
    getUser() {
        return this.afAuth.authState.map((user: firebase.User) => {
            return user;
        })

    }
}
