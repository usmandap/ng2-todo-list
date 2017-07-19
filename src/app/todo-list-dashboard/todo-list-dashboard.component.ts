import { Component } from '@angular/core'

@Component({
    selector: 'todo-list-dashboard',
    styleUrls: ['todo-list-dashboard.component.scss'],
    template: `
    <div><md-toolbar color="primary">Todo List
    <a><button md-button md-raised-button>Logout</button></a>
    </md-toolbar>
    <toaster-container></toaster-container>
    <router-outlet></router-outlet></div>
`

})

export class TodoListDashboardComponent { }