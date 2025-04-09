import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../services/event.service';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  @Input() event!: Event;
}
