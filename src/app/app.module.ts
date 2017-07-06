import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { todoListDashboardModule } from './todo-list-dashboard/todo-list-dashboard.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    todoListDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
