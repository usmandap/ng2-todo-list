import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListLoginComponent } from './todo-list-auth/todo-list-login/todo-list-login.component'
import { TodoListDetailComponent } from './todo-list-detail/todo-list-detail.component'
import { TodoListRegisterComponent } from './todo-list-auth/todo-list-register/todo-list-register.component'
import { TodoAuthService } from './todo-list-auth/todo-list-auth.service';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Main Routes
  { path: 'login', component: TodoListLoginComponent },
  { path: 'register', component: TodoListRegisterComponent },
  { path: 'list', component: TodoListDetailComponent, canActivate: [TodoAuthService] }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
