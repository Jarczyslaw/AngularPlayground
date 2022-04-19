import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

  taskName: string = '';
  @Output() addTaskEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.taskName == null || this.taskName.length === 0) {
      alert("Invalid task name");
      return;
    }

    this.addTaskEvent.emit(this.taskName);
    this.taskName = '';
  }
}
