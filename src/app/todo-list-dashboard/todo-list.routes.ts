import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListInitialComponent } from './todo-list-initial/todo-list-initial.component'
import { TodoListDetailComponent } from './todo-list-detail/todo-list-detail.component'


export const routes: Routes = [
  { path: '', component: TodoListInitialComponent },
  { path: 'dialog', component: TodoListDetailComponent }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
