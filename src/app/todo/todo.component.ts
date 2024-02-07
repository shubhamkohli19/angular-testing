import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = { id: 0, title: '', completed: false };

  ngOnInit(): void {}

  addTodo() {
    this.newTodo.id = this.todos.length + 1;
    this.todos.push({ ...this.newTodo });
    this.newTodo.title = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  updateTodo(id: number) {
    const updatedTitle = prompt('Enter the new title:', this.todos.find(todo => todo.id === id)?.title);
    if (updatedTitle !== null && updatedTitle !== undefined) {
      this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, title: updatedTitle } : todo));
    }
  }

  toggleComplete(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}
