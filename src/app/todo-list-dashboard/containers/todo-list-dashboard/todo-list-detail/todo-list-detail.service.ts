import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class TodoService {
        $items: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) {}
    /**
 * @author Usman Hussain
 * This functions provides todo-list-detail-component all data from firebase.
 * Simple service function to provide Firebase observable
 * @return [{Object}]
 */
    fetchItems() {
    this.$items = this.db.list('tasks');
        //   this.$items.push({description: "test",
        //     id: 3,
        //     status: false})
    return this.$items;
  }
}
