import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  count = 0;
  arr = [];
  addTodo(postInput: HTMLTextAreaElement) {
    this.arr.push({ num: postInput.value, boo: false });
    postInput.value = "";
  }
  deleteTodo(item) {
    this.arr = this.arr.filter(b => {
      return item.num != b.num;
    });
  }
  change(item) {
    item.boo = !item.boo;
  }
  constructor() { }

  ngOnInit() {
  }

}
