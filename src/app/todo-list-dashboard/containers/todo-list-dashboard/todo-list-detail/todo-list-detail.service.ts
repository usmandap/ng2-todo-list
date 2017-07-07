import { Injectable } from '@angular/core'


// interface Tasks{
//     id:number,
//     description:string,
//     status:boolean

// }

@Injectable()
export class todoListDetailDataService {
    constructor() { }
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
}