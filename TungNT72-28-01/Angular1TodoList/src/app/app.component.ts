import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular1TodoList";
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
}
