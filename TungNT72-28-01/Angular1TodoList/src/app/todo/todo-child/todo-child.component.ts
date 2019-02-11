import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css']
})
export class TodoChildComponent implements OnInit {
  @Input() task: object;
  @Output() deleteEvent = new EventEmitter();
  isComplete: boolean;
  constructor() {
    this.isComplete = false;
  }

  ngOnInit() {}
  delete() {
    this.deleteEvent.emit(this.task);
  }
  changeComplete() {
    this.isComplete = !this.isComplete;
  }
}

