import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/news">News</a> |
      <a routerLink="/events">Events</a> |
      <a routerLink="/add-event">Add Event</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
