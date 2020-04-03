import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesService } from 'src/app/services/pages/pages.service';
import { Pages } from 'src/app/services/pages/pages.models';
import { MenuController, IonSplitPane, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  appPages:Array<Pages>
  isMenuOpen:boolean = false;
  @ViewChild('slide',{static: false}) slide:IonSlides
  constructor(
    private pagesService: PagesService,
    public menuController: MenuController,
    public splitPaneController:IonSplitPane
  ) {
   
   }

  async ngOnInit() {
    this.appPages = this.pagesService.appPages;
  }
  getRoute(name){
    return this.pagesService.getRoute(name)
  }
  async onOpenMenu(){
    this.menuController.open('menu')
  }

}
