import { Component, Input, OnInit } from '@angular/core';
import { TodoListServiceService } from 'src/app/service/todo-list-service.service';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  addToDoItem = {
    subject : "",
    content : ""
  }

  constructor(private todoListServiceService : TodoListServiceService) { }

  @Input()
  test : any;
  //<ToDoListComponent>[test] = test</ToDoListComponent>

  ngOnInit(): void {
    this.todoListServiceService.getTodoListItemData();
  }

  confirmBtnClick(){
    if(!this.addToDoItem.subject.trim()) {
      alert("標題請誤空白")
      return;
    }

    if(!this.addToDoItem.content.trim()) {
      alert("內容請誤空白")
      return;
    }

    alert("通過")
  }

  clearBtnClick(){

  }

}
