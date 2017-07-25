import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTasksComponent } from './todo-list-tasks.component';

describe('TodoListTasksComponent', () => {
  let component: TodoListTasksComponent;
  let fixture: ComponentFixture<TodoListTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
