import { Component } from '@angular/core';
@Component({
  selector: 'app-my-app',
  template: `
    <h1>{{bigTitle}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  bigTitle: String = 'Tour of Heroes';

}
