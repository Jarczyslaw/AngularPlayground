import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from '../components/todo-list/models/task.model';

@Pipe({
  name: 'transformTask'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: TaskModel, ...args: string[]): unknown {
    let name = value.name.charAt(0).toUpperCase() + value.name.slice(1);
    if (value.end != null) {
      name += ' - SUPER';
    } 
    return name + args[0];
  }

}
