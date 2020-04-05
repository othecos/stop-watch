import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages/pages.service';
import { Pages } from 'src/app/services/pages/pages.models';
import { MenuController, IonSplitPane, IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy, AfterViewInit{
  appPages:Array<Pages>
  isMenuOpen:boolean = false;
  animateMenuButton = false;
  @ViewChild('slide',{static: false}) slide:IonSlides
  subscription:Array<Subscription> = []
  constructor(
    private pagesService: PagesService,
    public menuController: MenuController,
    public splitPaneController:IonSplitPane
  ) {
    
   }

  async ngOnInit() {
    this.appPages = this.pagesService.appPages;
  }
  ngAfterViewInit(){
    this.onLastPage()
  }
  getRoute(name){
    return this.pagesService.getRoute(name)
  }
  onMenuButtonClicked(){
    this.animateMenuButton =  false
  }
  onLastPage(){
   let subs =  this.slide.ionSlideReachEnd.subscribe((isEnd)=>{
      console.log(isEnd);
      this.animateMenuButton = true
    })
    this.subscription.push(subs)
  }
  async onOpenMenu(){
    this.menuController.open('menu')
  }
  ngOnDestroy(){
    this.subscription.forEach((subs:Subscription)=> subs.unsubscribe())
  }
}
