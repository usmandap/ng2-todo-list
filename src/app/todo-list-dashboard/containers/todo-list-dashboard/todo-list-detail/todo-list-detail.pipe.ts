import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'filteredTasks'})
export class TaskFilterPipe implements PipeTransform {
  transform(value: any, arg1: any, index: any): any {
      if (index === 0) {
          return value;

      }else if (index === 1) {
          return value.filter((task) => !task.status);
      }else if (index === 2) {
          return value.filter((task) => task.status);
      }
  }
}
