import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todolist: string[] = [];
  tododata: string = '';
  todolistCopy: string[] = [];

  todoText: FormGroup = new FormGroup({
    todoInput: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    this.todolistCopy = this.todolist;
  }

  addTodo(todo: FormGroup) {
    this.todolist.push(todo.value.todoInput);
    this.todoText.reset();
  }

  deleteTodo(todo: string) {
    const index = this.todolist.indexOf(todo);

    if (index > -1) {
      this.todolist.splice(index, 1);
    }
  }

  filter(): void {
    if (this.tododata.length !== 0) {
      this.todolist = this.todolistCopy.filter((val) => {
        return val.includes(this.tododata);
      });
    } else {
      this.todolist = this.todolistCopy;
    }
  }
}
