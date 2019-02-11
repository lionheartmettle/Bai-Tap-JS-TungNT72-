import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular1TodoList';
  // count = 0;
  // arr = [];
  // addTodo(postInput) {
  //   this.arr.push({ num: postInput.value, boo: false });
  //   postInput.value = '';
  // }
  // deleteTodo(item) {
  //   this.arr = this.arr.filter(b => {
  //     return item.num !== b.num;
  //   });
  // }
  // change(item) {
  //   item.boo = !item.boo;
  // }
  data: TodoList; // chua danh ToDo
  text = '';

  constructor() {
    // load tu localStorage neu co thi thia.data = cai day
    // neu khong thi khoi tao cai moi
    const data = localStorage.getItem('myTodo');
    if (!data) {
      this.data = new TodoList();
    } else {
      this.data = new TodoList(JSON.parse(data));
    }
  }
  handleAdd() {
    this.data.add(this.text);
    this.text = '';
    saveToLocalStorage(this.data);
  }

  handleDelete(id) {
    this.data.remove(id);
    saveToLocalStorage(this.data);
  }

  clickTodo(id) {
    this.data.toggleTodo(id);
  }
}

class ToDo {
  id: number;
  text: string;
  isComplete: boolean;

  constructor(text) {
    this.text = text;
    this.id = genId.next().value;
    this.isComplete = false;
  }

  toggle() {
    this.isComplete = !this.isComplete;
  }
}

class TodoList {
  data: ToDo[];

  constructor(data = []) {
    this.data = data;
  }

  // CRUD
  // ready 1
  getTodoById(id: number) {
    return this.data.find(t => t.id === id);
  }
  // read all
  getTodos() {
    return this.data;
  }

  add(text: string) {
    this.data.push(new ToDo(text));
  }

  // remove
  remove(id: number) {
    this.data = this.data.filter(t => t.id !== id);
  }

  toggleTodo(id: number) {
    // 1. lay todo co id
    // 2. switch trang thai
    const todo = this.getTodoById(id);
    if (!todo) {
      return;
    }

    todo.toggle();
  }
}

const genId = gen();

function* gen() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

function saveToLocalStorage(data) {
  localStorage.setItem('myTodo', JSON.stringify(data.data));
}
