import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-todo-list-tags',
  templateUrl: './todo-list-tags.component.html',
  styleUrls: ['./todo-list-tags.component.scss']
})
export class TodoListTagsComponent implements OnInit {

  @Output()
  selectedParentTag: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  tags;
  @Input()
  filterTag;

  constructor() { }

  ngOnInit() {
    console.log(this.tags);
    console.log(this.filterTag);
  }
  selectedItem(tag) {
    this.selectedParentTag.emit(tag);
  }

}
