import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { todoListDetailDataService } from './containers/todo-list-detail/todo-list-detail.service'

import { todoListDashboardComponent } from './containers/todo-list-dashboard/todo-list-dashboard.component'
import { todoListDetailComponent } from './containers/todo-list-detail/todo-list-detail.component'
import { todoListInitialComponent } from './containers/todo-list-initial/todo-list-initial.component'
import { todoListCustomMaterialModule } from './todo-list-custom-material.module'

import { routing } from './todo-list.routes';

@NgModule({
    declarations:[
        todoListDashboardComponent,
        todoListDetailComponent,
        todoListInitialComponent
    ],
    imports:[
        CommonModule,
        routing,
        FormsModule,
        todoListCustomMaterialModule
        ],
        providers:[todoListDetailDataService],
        exports:[
            todoListDashboardComponent,
            todoListDetailComponent,
            todoListInitialComponent
        ]
})

export class todoListDashboardModule {};