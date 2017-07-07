
import { async, TestBed } from '@angular/core/testing';
import { todoListDashboardComponent } from './todo-list-dashboard.component'
import { CommonModule } from "@angular/common/src/common";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing"
import { routing } from "app/todo-list-dashboard/todo-list.routes";
import { todoListCustomMaterialModule } from "app/todo-list-dashboard/todo-list-custom-material.module";
import { todoListInitialComponent } from "app/todo-list-dashboard/containers/todo-list-dashboard/todo-list-initial/todo-list-initial.component";
import { todoListDetailComponent } from "app/todo-list-dashboard/containers/todo-list-dashboard/todo-list-detail/todo-list-detail.component";
import { AppComponent } from "app/app.component";

// async beforeEach
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [AppComponent, todoListInitialComponent,
      todoListDashboardComponent,
      todoListDetailComponent],
    imports: [
      // CommonModule,
      routing,
      FormsModule,
      todoListCustomMaterialModule,
      RouterTestingModule
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    // declare the test component
  })
    .compileComponents();  // compile template and css
}));