
import { Component } from '@angular/core';

export class Student {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template:`
  <h1>{{title}}</h1>
  <h2>{{student.name}} details!</h2>
  <div><label>id: </label>{{student.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="student.name" placeholder="name">
  </div>
  `
})
export class AppComponent {
    title = 'Cadastro de usuários - II Secomp';
    student: Student = {
        id: 1,
        name: 'Joaozinho'
    };
}
