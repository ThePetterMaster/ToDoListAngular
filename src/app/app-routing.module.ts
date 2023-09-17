import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListViewComponent } from './views/todo-list-view/todo-list-view.component';

const routes: Routes = [
  { path: '', component: TodoListViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
