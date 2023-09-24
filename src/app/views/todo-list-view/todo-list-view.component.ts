import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent {
  todolist: String[] = ["Fazer uma coisa", "Fazer outra coisa"];
  itemadd: String=''
  itemNovo:String=''
  itemAntigo:String=''
  addItem(item: String) {
    this.todolist.push(item)
    this.itemadd=''
  }

  remover(item: String) {
    this.todolist=this.todolist.filter((a) => item !== a);
  }
  editar() {
    var indiceASubstituir = this.todolist.indexOf(this.itemAntigo);
    if (indiceASubstituir !== -1) { // Verifique se o elemento foi encontrado no array
      this.todolist.splice(indiceASubstituir, 1, this.itemNovo); // Use splice para substituir
    }
    this.itemAntigo=''
    this.itemNovo=''
  }
}
