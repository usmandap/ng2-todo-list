import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-tasks',
  templateUrl: './todo-list-tasks.component.html',
  styleUrls: ['./todo-list-tasks.component.scss']
})
export class TodoListTasksComponent implements OnInit {

  @Output()
  deleteParentTask: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  updateParentTaskStatus: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  task;
  @Input()
  tags;
  constructor() { }

  ngOnInit() {
    console.log(this.task);
  }

  deleteTask(task) {
    this.deleteParentTask.emit(task);
  }
  taskStatusUpdate(task) {
    this.updateParentTaskStatus.emit(task);
  }

}
