import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';
import { BaseTasksService } from '../../services/base-tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TasksListComponent implements OnInit {

  @Input() tasks: TaskModel[] = [];
  @Input() tasksHeader: string = '';
  @Input() emptyText: string = '';
  @Input() todoMode: boolean = false;
  @Input() headerColorEnabled: boolean = false;
  @Input() lastElementWarning: boolean = false;

  @Output() deleteTaskEvent = new EventEmitter<TaskModel>();
  @Output() doneTaskEvent = new EventEmitter<TaskModel>();

  constructor(private readonly tasksService: BaseTasksService) { }

  ngOnInit(): void {
  }

  deleteTask(task: TaskModel): void {
    this.tasksService.deleteTask(task);
    this.deleteTaskEvent.emit(task);
  }

  doneTask(task: TaskModel): void {
    this.tasksService.doneTask(task);
    this.doneTaskEvent.emit(task);
  }

  getColor(): string {
    if (!this.headerColorEnabled) {
      return 'black';
    }

    return this.tasks.length >= 5 ? 'red' : 'green';
  }
}
