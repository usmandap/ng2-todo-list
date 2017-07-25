import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/todo-list-environment';

import { TagInputModule } from 'ng2-tag-input';
import { TodoListLayoutComponent } from './todo-list/todo-list-layout.component'
import { TodoListDetailModule } from './todo-list/todo-list-detail/todo-list-detail.module'
import { TodoListCustomMaterialModule } from './todo-list/todo-list-custom-material.module'
import { TodoListAuthModule } from './todo-list/todo-list-auth/todo-list-auth.module'
import { ToasterModule } from 'angular2-toaster';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { routing } from './todo-list/todo-list.routes'

import { AppComponent } from './app.component';
import { TodoAuthService } from 'app/todo-list/todo-list-auth/todo-list-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    TagInputModule,
    AngularFireModule.initializeApp(environment.firebase, 'todo-list'),
    AngularFireDatabaseModule,
    TodoListCustomMaterialModule,
    TodoListDetailModule,
    TodoListAuthModule,
    ToasterModule
  ],
  exports: [TodoListLayoutComponent],
  providers: [TodoAuthService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
