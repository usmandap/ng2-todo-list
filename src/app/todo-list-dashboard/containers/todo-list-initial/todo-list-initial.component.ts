import { Component } from '@angular/core'

@Component({
    selector:'todo-list-initial',
    styleUrls:['todo-list-initial.component.scss'],
    template:`
  <a  [routerLink]="['/dialog']">Dialog</a>
  <h1>todo list Initial View</h1>
`

})

export class todoListInitialComponent {}