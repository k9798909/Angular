import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {

  constructor(private http: HttpClient) { }

  getTodoListItemData() {
    return this.http
      .get('http://127.0.0.1:4200/src/assets/todoListItemData.json');

  }
}
