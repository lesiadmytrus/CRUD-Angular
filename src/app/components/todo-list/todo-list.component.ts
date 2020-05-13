import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'to-do-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public tableColumns = ['id', 'name', 'description', 'created', 'edited'];
  public list: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAll().subscribe(task => {
      this.list = task;
    });
  }
}
