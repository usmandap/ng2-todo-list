import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'filteredTasks' })
export class TaskFilterPipe implements PipeTransform {
    transform(value: any, arg1: any, index: any, arg2: any, arg3: any): any {
        console.log(arg2)
        let filteredArray;
        if (index === 0) {
            filteredArray = value;
        } else if (index === 1) {
            filteredArray = value.filter((task) => !task.status);
        } else if (index === 2) {
            filteredArray = value.filter((task) => task.status);
        }
        if (arg2 === 'All') {
            if (arg3) {
                // tslint:disable-next-line:triple-equals
                filteredArray = filteredArray.filter((task) => task.tag == 'notag' || !(task.tag));
                return filteredArray;
            }
            return filteredArray;
        } else {
            filteredArray = filteredArray.filter(item => {
                return (item.tag || []).filter(tag => tag === arg2).length >= 1;
            });
            console.log(filteredArray);
            return filteredArray;
        }

    }
}
