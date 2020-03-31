import { Injectable, EventEmitter } from '@angular/core';
import { Pages } from './pages.models';




@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public appPages = [
    new Pages('Interval','/interval','alarm'),
    new Pages('Count-down','/count-down','chevron-down-circle'),
    new Pages('Count-Up','/count-up','chevron-up-circle'),
    new Pages('Donate: )','/donate','happy'),
  ];
 
  constructor() { 
    
  }
 
  
}
