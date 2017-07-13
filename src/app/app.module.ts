import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/todo-list-environment';

import { TodoListDashboardModule } from './todo-list-dashboard/todo-list-dashboard.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'todo-list'),
    AngularFireDatabaseModule,
    TodoListDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
