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
  showExerciseList: boolean = false
  constructor(
    private router: Router,
    private pagesServices: PagesService,
    private activatedRoute:ActivatedRoute
  ) {
    this.appPages = this.pagesServices.appPages
  }
  ngOnInit() {
    this.pagesServices.event.subscribe((event)=>{
      this.checkVisibility()
    })
  }
  checkVisibility(){
    this.showExerciseList = this.isPageActive('interval')
    console.log(this.pagesServices.getActivePage());
    
  }
  isPageActive(URL){
    try{
      return this.pagesServices.getActivePage().url.includes(URL) 
    }catch{return false}
  }
  getCurrentPage(path){
    if(!path) path = window.location.pathname.split('/')[1]
    let currentPage = this.appPages.find(page => Utils.removeSpecialCharacter(page.url.toLowerCase()) === path.toLowerCase());
    console.log(currentPage)

  }
}
