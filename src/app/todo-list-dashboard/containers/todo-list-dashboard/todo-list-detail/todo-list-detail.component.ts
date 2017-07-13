import { Component, OnInit } from '@angular/core'
import { TodoService } from './todo-list-detail.service'
import { FirebaseListObservable } from 'angularfire2/database';


interface Task {
    id: number,
    description: string,
    status: boolean

}

@Component({
    selector: 'todo-list-detail',
    styleUrls: ['todo-list-detail.component.scss'],
    templateUrl: './todo-list-detail.view.html'

})

export class TodoListDetailComponent implements OnInit {
    tasks: Task[];
    allTasks: Task[];
    remainingTasks: number;
    hero;
    public description;
    public selectedIndex;
    $tasks: FirebaseListObservable<Task[]>;

    constructor(private todoitems: TodoService) {}
    /**
  * @author Usman Hussain
  * This functions saves new task via user input.
  * Take user input and push into Tasks array
  * @param task {String}
  * @return void
  */
    saveNewtask(task) {
        this.description = '';
        const data = {
            description: task,
            id: this.tasks.length,
            status: false
        }
        this.$tasks.push(data);
        this.remainingTasks = this.getUnfinishedTasks();
    }
    /**
   * @author Usman Hussain
   * This functions delete task via delete call.
   * Take the task object needs to be deleted from tasks array and splice it.
   * @param task {Object}
   * @return void
   */
    deleteTask(task) {
        this.$tasks.remove(task);
        this.remainingTasks = this.getUnfinishedTasks();
    }
    taskStatusUpdate(task) {
        console.log(task.$key);
        this.$tasks.update(task.$key , task);
        this.remainingTasks = this.getUnfinishedTasks();
    }
    /**
   * @author Usman Hussain
   * This functions findout remaining tasks needs to be completed soon via traversing tasks array.
   * Simple function doesn't take any param just put some code here to prevent myself from DRY
   * @return void
   */
    getUnfinishedTasks() {
        return this.allTasks.filter((task) => !task.status).length;
    }
    ngOnInit() {
     this.selectedIndex = 0;
        console.log('on init');
        this.todoitems.fetchItems().subscribe((todoitems) => {
            console.log('items', todoitems);
            this.allTasks = todoitems;
            this.tasks = todoitems;
            this.remainingTasks = this.getUnfinishedTasks();
             });
         this.$tasks = this.todoitems.fetchItems();

    }
}
