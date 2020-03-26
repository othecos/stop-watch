import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../services/watch/watch.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  timer
  stayOpen = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private watchService:WatchService,
    private menu: MenuController
    ) {
    // this.initTimer(60)
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((response)=>{
      this.folder = response.get('id')
      console.log(response);
      
    })
  }
  initTimer(seconds){
    this.watchService.setTimer(seconds)
    this.watchService.enableCounter()
    console.log(this.watchService.initCountDown())
  }
  playTimer(){
    this.watchService.enableCounter()
  }
  refreshTimer(){
    this.initTimer(60)
  }
  pauseTimer(){
    this.watchService.disableCounter()
  }
  openSideMenu(){
    console.log(this.menu);
    this.menu.enable(true,'menu')
    this.menu.open('menu');
  }

}
