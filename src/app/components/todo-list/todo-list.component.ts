import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'to-do-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public tableColumns = ['id', 'name', 'description', 'created', 'edited', 'actions'];
  public list: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllTodo();
  }

  getAllTodo(query = '') {
    this.todoService.getAll(query).subscribe(tasks => {
      this.list = tasks;
    });
  }

  deleteTodo(id: string) {
    this.todoService.delete(id).subscribe(response => {
      this.getAllTodo('');
      alert('Successfully deleted');
    });
  }

  update(id: string, task: Todo): void {
    this.todoService.update(id, task).subscribe(() => {
      alert('Updeted');
      this.router.navigate(['/create']);
    });
  }
}
