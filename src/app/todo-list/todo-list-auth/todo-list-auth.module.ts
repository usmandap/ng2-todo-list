import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './todo-list-auth.routing';
import { TodoListLoginComponent } from './todo-list-login/todo-list-login.component';
import { TodoListCustomMaterialModule } from '../todo-list-custom-material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { TodoAuthService } from './todo-list-auth.service';
import { TodoListRegisterComponent } from './todo-list-register/todo-list-register.component';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
    imports: [
        CommonModule,
        routing,
        TodoListCustomMaterialModule,
        ReactiveFormsModule
    ],
    declarations: [TodoListRegisterComponent, TodoListLoginComponent],
    providers: [ AngularFireAuth, TodoAuthService]
})
export class TodoListAuthModule { }
