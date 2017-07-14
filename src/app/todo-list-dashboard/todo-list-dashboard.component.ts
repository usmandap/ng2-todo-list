import { Component } from '@angular/core'

@Component({
    selector: 'todo-list-dashboard',
    styleUrls: ['todo-list-dashboard.component.scss'],
    template: `
    <div><md-toolbar color="primary">Todo List</md-toolbar>
    <router-outlet></router-outlet></div>
`

})

export class TodoListDashboardComponent { }