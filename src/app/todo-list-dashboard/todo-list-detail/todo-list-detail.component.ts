import { Component, OnInit } from '@angular/core'
import { TodoService } from './todo-list-detail.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { TodoAuthService } from '../todo-list-auth/todo-list-auth.service';


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
    task: Task[];
    remainingTasks: number;
    public description;
    public selectedIndex;
    $tasks: FirebaseListObservable<Task[]>;
    private sub: Subscription;
    subscription: Subscription;
    loggedInUser;
    filterTag = 'all';
    noTag: Boolean;
    selectable;
    removable;
    tags = [
        'personal', 'work', 'shopping', 'errands', 'movies to watch'
    ]

    constructor(private todoitems: TodoService, private todoauthservice: TodoAuthService) { }
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
            status: false,
            tag: []
        }
        data.tag.push(this.filterTag === 'all' ? 'notag' : this.filterTag)
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
    /**
   * @author Usman Hussain
   * This functions update task status via checkbox input.
   * Simple function takes current task and update its status
   * @param task {Object}
   * @return void
   */
    taskStatusUpdate(task, tag) {
        console.log(task);
        this.$tasks.update(task.$key, task);
        this.remainingTasks = this.getUnfinishedTasks();
    }
    /**
   * @author Usman Hussain
   * This functions findout remaining tasks needs to be completed soon via traversing tasks array.
   * Simple function doesn't take any param just put some code here to prevent myself from DRY
   * @return void
   */
    getUnfinishedTasks() {
        return this.tasks.filter((task) => !task.status).length;
    }
    logout() {
        this.sub.unsubscribe();
        this.subscription.unsubscribe();
        this.todoauthservice.logoutUser();
    }
    ngOnInit() {
        this.selectable = true;
        this.selectedIndex = 0;
        this.noTag = false;
        console.log();
        this.subscription = this.todoauthservice.getUser().subscribe((user) => {
            this.loggedInUser = user;
        })
        this.sub = this.todoitems.fetchItems().subscribe((todoitems) => {
            console.log('items', todoitems);
            this.tasks = todoitems;
            this.remainingTasks = this.getUnfinishedTasks();
        });
        this.$tasks = this.todoitems.fetchItems();

    }
    selectedItem(e) {
        console.log(e);
        this.filterTag = e;
        this.remainingTasks = this.getUnfinishedTasks();
    }
}
