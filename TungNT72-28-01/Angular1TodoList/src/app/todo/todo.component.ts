import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  list = [];
  text = '';
  id = 0;
  constructor() {}

  ngOnInit() {}
  addTask() {
    this.id = genId.next().value;
    this.list.push({value: this.text, ipx: this.id});
    this.text = '';
  }
  deleteTask(task) {
    this.list = this.list.filter(t => t.ipx !== task.ipx);
  }
}
const genId = gen();

function* gen() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
