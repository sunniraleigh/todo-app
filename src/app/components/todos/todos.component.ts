import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // create an array of todos
  // create an array of todos
  todos: Todo[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First Todo",
        completed: false
      },
      {
        content: "Second Todo",
        completed: true
      }
    ]
  }

  // create a method that allows user to click task to complete it
  toggleDone (id:number) {
    // loops through todos and finds the one that matches the id
    // if correct, sets status to completed
    // is there a more straightforward method in ts to find an object by index in an array?
    this.todos.forEach((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  // method that deletes a todo
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  // method to add todo
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    // clears input
    this.inputTodo = ""; 
  }

}
