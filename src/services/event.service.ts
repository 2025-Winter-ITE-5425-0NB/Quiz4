import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Event {
  id?: number;
  name: string;
  detail: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class EventService {
  private apiUrl = 'https://product-app-74q6.onrender.com/events';
  private http = inject(HttpClient);

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }
}
