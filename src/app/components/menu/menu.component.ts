import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages/pages.service';
import { Pages } from 'src/app/services/pages/pages.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public selectedIndex = 0;

  appPages: Array<Pages> = [];
  showExerciseList = false;
  constructor(
    public pagesServices: PagesService,
  ) {
    this.appPages = this.pagesServices.appPages;
  }
  ngOnInit() {
    this.pagesServices.event.subscribe(() => {
      this.checkVisibility();
    });
  }
  checkVisibility() {
    this.showExerciseList = this.isPageActive('interval');
  }
  isPageActive(URL) {
    try {
      return this.pagesServices.getActivePage().url.includes(URL);
    } catch {return false; }
  }
}
