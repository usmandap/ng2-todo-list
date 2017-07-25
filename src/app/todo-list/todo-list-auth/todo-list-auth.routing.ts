import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListLoginComponent } from './todo-list-login/todo-list-login.component';
import { TodoListRegisterComponent } from './todo-list-register/todo-list-register.component';

const routes: Routes = [
    { path: 'login', component: TodoListLoginComponent },
    { path: 'register', component: TodoListRegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
