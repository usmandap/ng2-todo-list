import { Component, OnInit } from '@angular/core'
import { todoListDetailDataService } from './todo-list-detail.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


interface Tasks {
    id: number,
    description: string,
    status: boolean

}

@Component({
    selector: 'todo-list-detail',
    styleUrls: ['todo-list-detail.component.scss'],
    templateUrl: './todo-list-detail.view.html'

})

export class todoListDetailComponent implements OnInit {
    tasks: Tasks[];
    allTasks: Tasks[];
    tabStatus: boolean = false;
    firstInit:boolean = true
    allTab: boolean = true;
    remainingTasks: number;
    hero;
    public description;
    $tasks: FirebaseListObservable<any[]>;

    constructor(private data: todoListDetailDataService) {

    }




    /**
  * @author Usman Hussain
  * This functions saves new task via user input.
  * Take user input and push into Tasks array
  * @param task {String}
  * @return void
  */
    saveNewtask(task) {

        this.description = '';
        var data = {
            description: task,
            id: this.tasks.length,
            status: false
        }
        // if (this.tabStatus) {
        //     this.allTasks.push(data)
        // }
        // else {
        //     this.tasks.push(data)
        //     this.allTasks.push(data);
        // }
        this.$tasks.push(data);
        this.remainingTasks = this.getUnfinishedTasks();

    }
    /**
  * @author Usman Hussain
  * This functions finds the activated tab via tab event.
  * Take event and current activated tab to render view according to it.
  * @param event {Object}
  * @param currentTab {String}
  * @return void
  */
    showTabData(event, currentTab) {
        console.log('tab function hit');
        var filteredTasks;
        this.tasks = this.allTasks;
        if (currentTab == "Not Completed") {
            this.tabStatus = false;
            this.allTab = false;
            filteredTasks = this.tasks.filter((currentTask) => !currentTask.status)
            this.tasks = filteredTasks;
        }
        else if (currentTab == "Completed") {
            this.tabStatus = true;
            this.allTab = false;
            filteredTasks = this.tasks.filter((currentTask) => currentTask.status)
            this.tasks = filteredTasks;
        }
        else {
            this.allTab = true;
            this.tasks = this.allTasks;
        }
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
        this.tasks.splice(this.tasks.indexOf(task), 1);
        if (this.allTasks.includes(task)) {
            this.allTasks.splice(this.allTasks.indexOf(task), 1);
        }
        this.remainingTasks = this.getUnfinishedTasks();
    }
    taskStatusUpdate(task) {
        console.log(task.$key);
        this.$tasks.update(task.$key,task);
        for (let newTask in this.allTasks) {
            if (this.allTasks[newTask].id == task.id) {
                this.allTasks[newTask].status = task.status;
                this.remainingTasks = this.getUnfinishedTasks();
                break;
            }
        }
        if (this.allTab) {
            return;
        }
        else if (!this.tabStatus && task.status) {
            this.tasks = this.tasks.filter((currentTask) => !currentTask.status)
        }
        else if (this.tabStatus && !task.status) {
            this.tasks = this.tasks.filter((currentTask) => currentTask.status)
        }
    }
    /**
   * @author Usman Hussain
   * This functions findout remaining tasks needs to be completed soon via traversing tasks array.
   * Simple function doesn't take any param just put some code here to prevent myself from DRY
   * @return void
   */
    getUnfinishedTasks() {
        var totalRemainingtasks = 0;
        for (let task in this.allTasks) {
            if (!this.allTasks[task].status) {
                console.log('true');
                totalRemainingtasks++
            }
        }
        console.log(totalRemainingtasks);
        return totalRemainingtasks;
    }
    ngOnInit() {
        console.log('on init');
        this.data.fetchItems().subscribe((todoitems) => {
            console.log("items",todoitems);
            if(this.firstInit){
                this.firstInit = false;
this.tasks = todoitems;
            this.allTasks = todoitems;
            }
            
         });
         this.$tasks = this.data.fetchItems();

    }
}