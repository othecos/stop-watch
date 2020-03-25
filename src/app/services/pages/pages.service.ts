import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public appPages = [
    {
      title: 'Interval Training',
      url: '/folder/interval',
      icon: 'alarm'
    },
    {
      title: 'Count-down Training',
      url: '/folder/count-down',
      icon:  "chevron-down-circle"
    },
    {
      title: 'Count-Up Training',
      url: '/folder/count-up',
      icon: 'chevron-up-circle'
    },
    {
      title: 'Donate :) !',
      url: '/folder/donate',
      icon: 'happy',
    },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { 
    
  }
}
