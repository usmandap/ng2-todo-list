import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListDetailComponent } from './todo-list-detail.component'
import { TaskFilterPipe } from './todo-list-detail.pipe'
import { TodoService } from './todo-list-detail.service'
import { TodoListCustomMaterialModule } from '../todo-list-custom-material.module'
import { FormsModule } from '@angular/forms';
import { routing } from './todo-list-detail-routing';
import { TagInputModule } from 'ng2-tag-input';
import { TodoListTasksComponent } from './todo-list-tasks/todo-list-tasks.component';
import { TodoListTagsComponent } from './todo-list-tags/todo-list-tags.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        TodoListCustomMaterialModule
    ],
    declarations: [
        TodoListDetailComponent,
        TaskFilterPipe,
        TodoListTasksComponent,
        TodoListTagsComponent
    ],
    providers: [TodoService]
})

export class TodoListDetailModule { };
