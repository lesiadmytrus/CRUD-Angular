import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ){ }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'id': [null],
      'name': [null],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'created': [null],
      'edited': [null]
    });
  }

  createTodo(task) {
    this.todoService.createToDo(task).subscribe(res => {
      alert('Your task added');
      console.log(res);
    });
  }
}