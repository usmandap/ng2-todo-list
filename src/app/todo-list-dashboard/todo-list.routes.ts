import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { todoListInitialComponent } from './containers/todo-list-dashboard/todo-list-initial/todo-list-initial.component'
import { TodoListDetailComponent } from './containers/todo-list-dashboard/todo-list-detail/todo-list-detail.component'


export const routes: Routes = [
  { path: '', component: todoListInitialComponent },
  { path: 'dialog', component: TodoListDetailComponent }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
