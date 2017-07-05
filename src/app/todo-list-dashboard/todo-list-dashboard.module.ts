import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { todoListDashboardComponent } from './containers/todo-list-dashboard/todo-list-dashboard.component'
import { todoListDialogComponent } from './containers/todo-list-dialog/todo-list-dialog.component'
import { todoListCustomMaterialModule } from './todo-list-custom-material.module'

@NgModule({
    declarations:[
        todoListDashboardComponent,
        todoListDialogComponent
    ],
    imports:[
        CommonModule,
        todoListCustomMaterialModule
        ],
        exports:[
            todoListDashboardComponent,
            todoListDialogComponent
        ]
})

export class todoListDashboardModule {};