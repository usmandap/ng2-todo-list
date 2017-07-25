import { Component, OnInit } from '@angular/core'
import { TodoAuthService } from './todo-list-auth/todo-list-auth.service'
import { Router } from '@angular/router';

@Component({
    selector: 'todo-list-layout',
    styleUrls: ['todo-list-layout.component.scss'],
    template: `
    <div>
        <md-toolbar color="primary">Todo List <a [routerLink]="['list']" [routerLinkActive]="['is-active']">
            <button class="logout-btn" md-button md-raised-button (click)="logout()">Logout</button></a>
        </md-toolbar>
        <toaster-container></toaster-container>
        <router-outlet></router-outlet>
    </div>
    `,

})

export class TodoListLayoutComponent implements OnInit {
    constructor(private router: Router, private todoAuthService: TodoAuthService) {
    }

    logout() {
        this.todoAuthService.logoutUser();
    }
    ngOnInit() {

    }

}
