import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { todoListDetailDataService } from './containers/todo-list-dashboard/todo-list-detail/todo-list-detail.service'

import { todoListDashboardComponent } from './containers/todo-list-dashboard/todo-list-dashboard.component'
import { todoListDetailComponent } from './containers/todo-list-dashboard/todo-list-detail/todo-list-detail.component'
import { todoListInitialComponent } from './containers/todo-list-dashboard/todo-list-initial/todo-list-initial.component'
import { todoListCustomMaterialModule } from './todo-list-custom-material.module'

import { routing } from './todo-list.routes';

@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule,
        todoListCustomMaterialModule
    ],
    declarations: [
        todoListDashboardComponent,
        todoListDetailComponent,
        todoListInitialComponent
    ],
    providers: [todoListDetailDataService],
    exports: [
        todoListDashboardComponent
    ]
})

export class todoListDashboardModule { };