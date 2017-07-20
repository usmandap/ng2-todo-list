import { Component } from '@angular/core'
import { TodoAuthService } from './todo-list-auth/todo-list-auth.service'

@Component({
    selector: 'todo-list-dashboard',
    styleUrls: ['todo-list-dashboard.component.scss'],
    template: `
    <div><md-toolbar color="primary">Todo List
    </md-toolbar>
    <toaster-container></toaster-container>
    <router-outlet></router-outlet></div>
`

})

export class TodoListDashboardComponent {
    constructor(private todoauthservice: TodoAuthService) {
    }

    logout() {
        this.todoauthservice.logoutUser();
    }
}
