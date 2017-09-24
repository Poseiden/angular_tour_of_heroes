import { Component } from '@angular/core';
@Component({
  selector: 'app-my-app',
  template: `
    <h1>{{bigTitle}}</h1>
    <app-my-heroes></app-my-heroes>
  `
})

export class AppComponent {
  bigTitle: String = 'a jing';

}
