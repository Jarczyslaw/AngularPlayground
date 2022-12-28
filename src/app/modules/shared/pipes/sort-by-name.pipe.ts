import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from '../../todo-list/models/task.model';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(value: TaskModel[], ...args: unknown[]): TaskModel[] {
    return value.sort((task1, task2) => {
      if (task1.name.toLowerCase() > task2.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
