import { Component } from '@angular/core'

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

export class todoListDetailComponent {
tasks:Tasks[] =[{
    id:0,
    description:"Go to Gym",
    status:false
},
{
    id:1,
    description:"Swimming",
    status:true
},
{
    id:2,
    description:"Airport",
    status:true
}];

private saveNewtask(task){
    console.log(task);
}
}