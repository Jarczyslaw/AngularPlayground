import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';
import { BaseTasksService } from '../../services/base-tasks.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

  taskName: string = '';
  @Output() addTaskEvent = new EventEmitter<TaskModel>();

  constructor(private readonly tasksService: BaseTasksService) { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.taskName == null || this.taskName.length === 0) {
      alert("Invalid task name");
      return;
    }
    
    const newTask = <TaskModel> {
      name: this.taskName,
      created: new Date().toLocaleString(),
      isDone: false
    }

    this.tasksService.addTask(newTask);

    this.addTaskEvent.emit(newTask);
    this.taskName = '';
  }
}
