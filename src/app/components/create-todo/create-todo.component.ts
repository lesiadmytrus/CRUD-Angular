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
      'id': [null, Validators.required],
      'name': [null, [Validators.required, Validators.minLength(2), Validators.maxLength(7)]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'created': [null, Validators.required],
      'edited': [null, Validators.required]
    });
  }

  createTodo(task) {
    this.todoService.createToDo(task).subscribe(res => {
      alert('Your task added');
    });
  }
}
