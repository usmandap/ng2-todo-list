import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { todoListInitialComponent } from './containers/todo-list-initial/todo-list-initial.component'
import { todoListDetailComponent } from './containers/todo-list-detail/todo-list-detail.component'


export const routes: Routes = [
  { path: '', component: todoListInitialComponent },
  { path: 'dialog', component: todoListDetailComponent }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);