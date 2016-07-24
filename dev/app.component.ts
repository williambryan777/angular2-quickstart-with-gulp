import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ],
  styleUrls: ['app/src/css/app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
