import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter;

  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2){
      return "bg-warning";
    } else {
    return "bg-info";
    }
  }
}

// export class TaskListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
