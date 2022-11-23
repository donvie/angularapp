import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent {
  description = 'Hello World';
  todos = [
    {
      id: 1,
      description: 'Dancing',
      isCompleted: false
    },
    {
      id: 2,
      description: 'Programming',
      isCompleted: false
    },
    {
      id: 3,
      description: 'Basketball',
      isCompleted: false
    }
  ]

  ngOnInit() {
  }

  addTodo () {
    this.todos.push({
      id: 1,
      description: this.description,
      isCompleted: false
    })
    this.description = ''
    alert('Added!')
  }

  removeTodo (i: any) {
    this.todos.splice(i, 1)
    alert('Removed!')
  } 
}
