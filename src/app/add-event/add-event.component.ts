import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventForm;

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      detail: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const event = {
        name: this.eventForm.value.name || '',
        detail: this.eventForm.value.detail || '',
        category: this.eventForm.value.category || ''
      };
      this.eventService.addEvent(event).subscribe(() => {
        alert('Event added!');
        this.eventForm.reset();
      });
    }
  }
}
