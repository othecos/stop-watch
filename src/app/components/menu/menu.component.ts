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
    private pagesServices: PagesService,
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
  }
  isPageActive(URL){
    try{
      return this.pagesServices.getActivePage().url.includes(URL) 
    }catch{return false}
  }
}
