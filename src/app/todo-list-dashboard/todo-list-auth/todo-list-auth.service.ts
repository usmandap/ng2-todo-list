import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router';

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
    allUsers: User[] = [{
        id: 12,
        firstname: 'usman',
        lastname: 'hussain',
        email: 'dap@gmail.com',
        password: '12345'
    }];
    loggedInUser: User;

    constructor(private router: Router) { }
    /**
  * @author Usman Hussain
  * This functions provides auth for login user.
  * Simple service function to provide user application access
  * @return boolean
  */
    loginUser(loginUser) {
        let userFound;
        console.log(loginUser);
        this.allUsers.forEach((user) => {
            if ((user.email === loginUser.email) && (user.password === loginUser.password)) {
                console.log('found');
                userFound = user;
                return;
            }
        });
        if (userFound) {
            this.loggedInUser = userFound;
            this.router.navigate(['/list']);
            return true;
        } else {
            return false;
        }

    }
      /**
  * @author Usman Hussain
  * This functions provides auth for Register user.
  * Simple service function to save user details
  * @return boolean
  */
    registerUser(registerUser) {
        if (this.allUsers.includes(registerUser)) {
            return false;
        } else {
            this.allUsers.push(registerUser);
            this.router.navigate(['/login']);
            return true;
        }
    }
        /**
  * @author Usman Hussain
  * This functions provides logout for user.
  * Simple service function to logout user
  * @return boolean
  */
    logoutUser() {
        delete this.loggedInUser;
        this.router.navigate(['/login']);
    }
          /**
  * @author Usman Hussain
  * This functions provides guard for accessing application
  * Simple service function to check if the has access for following route
  * @return boolean
  */
    canActivate() {
        if (this.loggedInUser) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
