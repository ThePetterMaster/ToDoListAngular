import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent {
  todolist: String[] = ["aa", "bb"];
  itemadd: String=''
  addItem(item: String) {
    this.todolist.push(item)
    this.itemadd=''
  }

  remover(item: String) {
    this.todolist=this.todolist.filter((a) => item !== a);
  }
}
