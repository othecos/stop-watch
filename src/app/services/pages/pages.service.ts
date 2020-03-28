import { Injectable, EventEmitter } from '@angular/core';
import { Pages } from './pages.models';




@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public appPages = [
    new Pages('Interval Training','/interval','alarm'),
    new Pages('Count-down Training','/count-down','chevron-down-circle'),
    new Pages('Count-Up Training','/count-up','chevron-up-circle'),
    new Pages('Donate: )','/donate','happy'),
  ];
 
  constructor() { 
    
  }
 
  
}
