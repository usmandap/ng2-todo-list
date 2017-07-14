import { Component } from '@angular/core'

@Component({
  selector: 'todo-list-initial',
  styleUrls: ['todo-list-initial.component.scss'],
  template: `
  <div class="init-view">
  <a  [routerLink]="['/dialog']">Click here to start</a>
  <h1>Welcome to Todo List App</h1></div>
`

})

export class TodoListInitialComponent { }
