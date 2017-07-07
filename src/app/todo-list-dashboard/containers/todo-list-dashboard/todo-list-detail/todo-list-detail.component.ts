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
    remainingTasks:number;
    hero;
    public description;

    constructor(private data: todoListDetailDataService) {
        
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
        this.remainingTasks =  this.getUnfinishedTasks();
        
    }
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
    deleteTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        if (this.allTasks.includes(task)) {
            this.allTasks.splice(this.allTasks.indexOf(task), 1);
        }
        this.remainingTasks =  this.getUnfinishedTasks();
    }
    taskStatusUpdate(task) {
        for (let newTask in this.allTasks) {
            if (this.allTasks[newTask].id == task.id) {
                this.allTasks[newTask].status = task.status;
         this.remainingTasks =  this.getUnfinishedTasks();    
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
    getUnfinishedTasks(){
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
        this.tasks = this.data.getTodos();
        this.allTasks = this.data.getTodos();
        this.remainingTasks =  this.getUnfinishedTasks();
       
    }
}