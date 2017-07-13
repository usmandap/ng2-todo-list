import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
// TODO: Rename to TodoService
export class todoListDetailDataService {
        $items: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) { 
    

    }
    /**
 * @author Usman Hussain
 * This functions provides todo-list-detail-component all initial data.
 * Simple service function to provide data to component
 * @return [{Object}]
 */
    getTodos() {
        return [{
            id: 0,
            description: "Go to Gym",
            status: false
        },
        {
            id: 1,
            description: "Swimming",
            status: true
        },
        {
            id: 2,
            description: "Airport",
            status: true
        }];
    }

    fetchItems() {
    this.$items = this.db.list('tasks');
        //   this.$items.push({description: "test",
        //     id: 3,
        //     status: false})
    return this.$items;
    
  }
}
