import { Component, OnInit } from '@angular/core'
import { todoListDetailDataService } from './todo-list-detail.service'

interface Tasks{
    id:number,
    description:string,
    status:boolean

}

@Component({
    selector:'todo-list-detail',
    styleUrls:['todo-list-detail.component.scss'],
    templateUrl:'./todo-list-detail.view.html'

})

export class todoListDetailComponent implements OnInit {
   
    tasks: Tasks[];
    allTasks:Tasks[];
    tabStatus:boolean= false;
    public description = "test desc";
    
    constructor(private data:todoListDetailDataService){
        this.tasks= data.tasks;
        this.allTasks = data.tasks;
        setTimeout(()=>{
            this.description = "new test subject";
        },1200);
    }
private (task){
   
    if(this.tabStatus){
        console.log('true');
        this.allTasks.push({
        description:task,
        id:this.tasks.length,
        status:false
    })
}
else{
    console.log('false');
    this.tasks.push({
        description:task,
        id:this.tasks.length,
        status:false
    })
    this.allTasks = this.tasks;
}
}

 showTabData(event,currentTab){
console.log(currentTab);
var filteredTasks;
this.tasks = this.allTasks;
if(currentTab == "Not Completed"){
    this.tabStatus = false;
    filteredTasks = this.tasks.filter((currentTask)=> !currentTask.status)
    this.tasks = filteredTasks;
}
else if(currentTab == "Completed"){
    this.tabStatus = true;
    filteredTasks = this.tasks.filter((currentTask) => currentTask.status)
    this.tasks = filteredTasks;
}
else{
    this.tasks = this.allTasks;
}
}
 deleteTask(task){
this.tasks.splice(this.tasks.indexOf(task),1);
console.log(this.allTasks.includes(task));
if(this.allTasks.includes(task)){
    console.log('hit');
this.allTasks.splice(this.allTasks.indexOf(task),1);
}
console.log("tasks",this.tasks);
console.log("all tasks",this.allTasks);
}
    

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}