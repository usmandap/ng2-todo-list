import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-todo-list-tags',
  templateUrl: './todo-list-tags.component.html',
  styleUrls: ['./todo-list-tags.component.css']
})
export class TodoListTagsComponent implements OnInit {

  @Output()
  selectedParentTag: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  tags;

  constructor() { }

  ngOnInit() {
    console.log(this.tags);
  }
  selectedItem(tag) {
    this.selectedParentTag.emit(tag);
  }

}
