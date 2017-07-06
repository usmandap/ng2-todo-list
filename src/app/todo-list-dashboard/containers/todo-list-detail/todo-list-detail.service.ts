import { Injectable} from '@angular/core'


// interface Tasks{
//     id:number,
//     description:string,
//     status:boolean

// }

@Injectable()
export class todoListDetailDataService{
    tasks:any[] =[{
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
    constructor(){}
}