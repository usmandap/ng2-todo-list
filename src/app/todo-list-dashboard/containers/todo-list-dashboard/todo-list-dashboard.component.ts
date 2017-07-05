import { Component } from '@angular/core'

@Component({
    selector:'todo-list-dashboard',
    styleUrls:['todo-list-dashboard.component.scss'],
    template:`
    <md-toolbar>Todo List</md-toolbar>
    <todo-list-dialog></todo-list-dialog>
`

})

export class todoListDashboardComponent {}