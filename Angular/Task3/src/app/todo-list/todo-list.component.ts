import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('todo') todoElement!: ElementRef;
  todolist: string[] = [];
  tododata: string = '';
  todolistCopy: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todolistCopy = this.todolist;
    console.log(this.todolistCopy);
  }

  addTodo(todo: string) {
    this.todolist.push(todo);
    (this.todoElement.nativeElement as HTMLInputElement).value = '';
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
