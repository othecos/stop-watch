import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages/pages.service';
import { FormBuilder } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { Pages } from 'src/app/services/pages/pages.models';
import { Utils } from 'src/app/classes/utils';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public selectedIndex = 0;

  appPages: Array<Pages> = []
  constructor(
    private router: Router,
    private pagesServices: PagesService,
  ) {
    this.appPages = this.pagesServices.appPages
  }
  ngOnInit() {
    this.setSelectedIndex(this.router.url)
    let subscription = this.router.events.subscribe((routerEvent:RouterEvent) => {
      const path = window.location.pathname.split('/')[1]
      if (path !== undefined) {
        if(this.setSelectedIndex(path) != -1)  subscription.unsubscribe()
      }
    })
  }

  private setSelectedIndex(path:string){
    this.selectedIndex = this.appPages.findIndex(page => Utils.removeSpecialCharacter(page.url.toLowerCase()) === path.toLowerCase());
    return this.selectedIndex
  }
}
