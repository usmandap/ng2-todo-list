
import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common/src/common';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'
import { routing } from './todo-list.routes';
import { TodoListCustomMaterialModule } from './todo-list-custom-material.module';
import { TodoListDashboardComponent } from './todo-list-dashboard.component'
import { TodoListInitialComponent } from './todo-list-initial/todo-list-initial.component';
import { TodoListDetailComponent } from './todo-list-detail/todo-list-detail.component';
import { TaskFilterPipe } from './todo-list-detail/todo-list-detail.pipe';
import { AppComponent } from '../app.component';

// async beforeEach
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [AppComponent,
      TodoListInitialComponent,
      TodoListDashboardComponent,
      TodoListDetailComponent,
      TaskFilterPipe],
    imports: [
      // CommonModule,
      routing,
      FormsModule,
      TodoListCustomMaterialModule,
      RouterTestingModule
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    // declare the test component
  })
    .compileComponents();  // compile template and css
}));