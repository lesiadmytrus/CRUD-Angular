import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public tableColumns = ['id', 'name', 'description', 'created', 'edited'];

  constructor() { }

  ngOnInit() { }
}
