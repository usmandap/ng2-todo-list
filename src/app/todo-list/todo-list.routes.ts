import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListLoginComponent } from './todo-list-auth/todo-list-login/todo-list-login.component'
import { TodoListDetailComponent } from './todo-list-detail/todo-list-detail.component'
import { TodoListRegisterComponent } from './todo-list-auth/todo-list-register/todo-list-register.component'
import { TodoAuthService } from './todo-list-auth/todo-list-auth.service';


export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  // Main Routes
  { path: 'auth', loadChildren: 'app/todo-list/todo-list-auth/todo-list-auth.module#TodoListAuthModule' },
  { path: 'list', loadChildren: 'app/todo-list/todo-list-detail/todo-list-detail.module#TodoListDetailModule',
   canActivate: [TodoAuthService] }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
