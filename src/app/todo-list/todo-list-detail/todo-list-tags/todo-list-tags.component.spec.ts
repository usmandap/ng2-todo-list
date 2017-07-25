import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTagsComponent } from './todo-list-tags.component';

describe('TodoListTagsComponent', () => {
  let component: TodoListTagsComponent;
  let fixture: ComponentFixture<TodoListTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
