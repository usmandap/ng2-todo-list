import { Component, OnInit} from '@angular/core'
import { todoListDetailDataService } from './todo-list-detail.service'

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

export class todoListDetailComponent implements OnInit{
    tasks: Tasks[];
    allTasks: Tasks[];
    tabStatus: boolean = false;
    allTab: boolean = true;
    hero;
    public description;

    constructor(private data: todoListDetailDataService) {
        this.tasks = data.getTodos();
        this.allTasks = data.getTodos();
    }
    saveNewtask(task) {
        this.description = '';
        var data = {
            description: task,
            id: this.tasks.length,
            status: false
        }
        if (this.tabStatus) {
            this.allTasks.push(data)
        }
        else {
            this.tasks.push(data)
            this.allTasks.push(data);
        }
    }

    showTabData(event, currentTab) {
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
    deleteTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        if (this.allTasks.includes(task)) {
            this.allTasks.splice(this.allTasks.indexOf(task), 1);
        }
    }
    taskStatusUpdate(task) {
        for (let newTask in this.allTasks) {
            if (this.allTasks[newTask].id == task.id) {
                this.allTasks[newTask].status = task.status;
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


    ngOnInit() {
        console.log('on init');
    }
}