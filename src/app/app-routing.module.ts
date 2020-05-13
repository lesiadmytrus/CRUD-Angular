import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

const routes: Routes = [
  {path: '', component: TodoListComponent },
  {path: 'create', component: CreateTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
