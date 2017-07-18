
import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common/src/common';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'
import { TodoListCustomMaterialModule } from '../todo-list-custom-material.module';
import { TodoListInitialComponent } from './todo-list-initial.component';

// async beforeEach
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [
      TodoListInitialComponent],
    imports: [
      // CommonModule,
      FormsModule,
      TodoListCustomMaterialModule,
      RouterTestingModule
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    // declare the test component
  })
    .compileComponents();  // compile template and css
}));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TodoListInitialComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Todo List App');
  }));