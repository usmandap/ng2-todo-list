import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListInitialComponent } from './todo-list-initial.component'
import { routing } from '../todo-list.routes'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TodoListInitialComponent]
})
export class TodoListInitialModule { }
