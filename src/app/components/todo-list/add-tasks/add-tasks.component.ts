import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

  taskName: string = '';
  @Output() addTaskEvent = new EventEmitter<string>();

  constructor(private readonly tasksService: TasksService) { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.taskName == null || this.taskName.length === 0) {
      alert("Invalid task name");
      return;
    }

    this.tasksService.addTask(this.taskName);

    this.addTaskEvent.emit(this.taskName);
    this.taskName = '';
  }
}
