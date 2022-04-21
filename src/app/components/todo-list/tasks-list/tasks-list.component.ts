import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TasksListComponent implements OnInit {

  @Input() tasks: string[] = [];
  @Input() tasksHeader: string = '';
  @Input() emptyText: string = '';
  @Input() todoMode: boolean = false;
  @Input() headerColorEnabled: boolean = false;
  @Input() lastElementWarning: boolean = false;

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() doneTaskEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: string): void {
    this.deleteTaskEvent.emit(task);
  }

  doneTask(task: string): void {
    this.doneTaskEvent.emit(task);
  }

  getColor(): string {
    if (!this.headerColorEnabled) {
      return 'black';
    }

    return this.tasks.length >= 5 ? 'red' : 'green';
  }
}
