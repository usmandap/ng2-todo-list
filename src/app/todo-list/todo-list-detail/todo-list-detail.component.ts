import { Component, OnInit } from '@angular/core'
import { TodoService } from './todo-list-detail.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { TodoAuthService } from '../todo-list-auth/todo-list-auth.service';


interface Task {
    id: number,
    description: string,
    status: boolean,
    tags?: string[]
}

@Component({
    selector: 'todo-list-detail',
    styleUrls: ['todo-list-detail.component.scss'],
    templateUrl: './todo-list-detail.view.html'
})

export class TodoListDetailComponent implements OnInit {
    tasks: Task[] = [];
    task: Task;
    // remainingTasks: number;
    description;
    selectedIndex;
    $tasks: FirebaseListObservable<Task[]>;
    private sub: Subscription;
    loggedInUser;
    filterTag = 'All';
    noTag: Boolean;
    tags = [
        'Personal', 'Work', 'Shopping', 'Errands', 'Movies To Watch'
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
        data.tag.push(this.filterTag === 'All' ? 'notag' : this.filterTag);
        this.$tasks.push(data);
    }
        /**
    * @author Usman Hussain
    * This functions delete task via delete call.
    * Take the task object needs to be deleted from tasks array and splice it.
    * @param task {Object}
    * @return void
    */
    deleteTask(task) {
        console.log(task);
        this.$tasks.remove(task);
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
    }
    /**
    * @author Usman Hussain
    * This functions findout remaining tasks needs to be completed soon via traversing tasks array.
    * Simple function doesn't take any param just put some code here to prevent myself from DRY¸
    * @return void
    */
    get remainingTasks() {
        return this.tasks.filter((task) => !task.status).length;
    }

    /**
    * @author Usman Hussain
    * This functions changes filterTag value to set current state of tag.
    * Simple function tag value as a param and set it to filterTag
    * @return void
    */
    selectedItem(tag) {
        console.log(tag);
        this.filterTag = tag;
    }
    ngOnInit() {
        this.selectedIndex = 0;
        this.noTag = false;
        console.log();
        this.todoauthservice.getUser().share()
        .first()
        .subscribe((user) => {
            this.loggedInUser = user;
        })
        this.sub = this.todoitems.fetchItems().subscribe((todoitems) => {
            console.log('items', todoitems);
            this.tasks = todoitems;
        });
        this.$tasks = this.todoitems.fetchItems();

    }
}
