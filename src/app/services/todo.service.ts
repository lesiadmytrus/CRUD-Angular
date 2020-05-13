import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly apiURL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  public getAll(query: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiURL}${query}`);
  }

  public createToDo(todo: Todo): Observable<Object> {
    return this.http.post(this.apiURL, todo);
  }
}
