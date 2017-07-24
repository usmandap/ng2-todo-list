import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { TodoAuthService } from '../todo-list-auth/todo-list-auth.service'
import { Subscription } from 'rxjs/Subscription';



@Injectable()
export class TodoService {
  $items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase, private todoauthservice: TodoAuthService) {
  }
  /**
* @author Usman Hussain
* This functions provides todo-list-detail-component all data from firebase.
* Simple service function to provide Firebase observable
* @return [{Object}]
*/
  fetchItems(): FirebaseListObservable<any[]> {
    const uid = this.todoauthservice.currentUser.uid;
    this.$items = this.db.list('/users/' + uid);
    return this.$items;
  }

}
