import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService, Event } from '../../services/event.service';
import { EventDetailComponent } from './event-detail/event-detail.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, EventDetailComponent],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => (this.events = data));
  }
}
