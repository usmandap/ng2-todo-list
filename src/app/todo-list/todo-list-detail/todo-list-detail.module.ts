import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListDetailComponent } from './todo-list-detail.component'
import { TaskFilterPipe } from './todo-list-detail.pipe'
import { TodoService } from './todo-list-detail.service'
import { TodoListCustomMaterialModule } from '../todo-list-custom-material.module'
import { FormsModule } from '@angular/forms';
import { routing } from '../todo-list.routes'



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        TodoListCustomMaterialModule
    ],
    declarations: [
        TodoListDetailComponent,
        TaskFilterPipe
    ],
    providers: [TodoService]
})

export class TodoListDetailModule { };
