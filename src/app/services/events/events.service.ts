import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public menuEvent:EventEmitter<'close' | 'open'> = new EventEmitter()
  constructor() { }
}
