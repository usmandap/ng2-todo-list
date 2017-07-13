import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TodoService } from './containers/todo-list-dashboard/todo-list-detail/todo-list-detail.service'

import { todoListDashboardComponent } from './containers/todo-list-dashboard/todo-list-dashboard.component'
import { TodoListDetailComponent } from './containers/todo-list-dashboard/todo-list-detail/todo-list-detail.component'
import { TaskFilterPipe } from './containers/todo-list-dashboard/todo-list-detail/todo-list-detail.pipe'
import { todoListInitialComponent } from './containers/todo-list-dashboard/todo-list-initial/todo-list-initial.component'
import { TodoListCustomMaterialModule } from './todo-list-custom-material.module'

import { routing } from './todo-list.routes';

@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule,
        TodoListCustomMaterialModule
    ],
    declarations: [
        todoListDashboardComponent,
        TodoListDetailComponent,
        todoListInitialComponent,
        TaskFilterPipe
    ],
    providers: [TodoService],
    exports: [
        todoListDashboardComponent
    ]
})

export class TodoListDashboardModule { };
