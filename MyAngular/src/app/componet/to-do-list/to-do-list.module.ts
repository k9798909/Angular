import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoListServiceService } from 'src/app/service/todo-list-service.service';


@NgModule({
  declarations: [
    ToDoListComponent
  ],
  providers:[
    TodoListServiceService
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[ToDoListComponent]
})
export class ToDoListModule { }
