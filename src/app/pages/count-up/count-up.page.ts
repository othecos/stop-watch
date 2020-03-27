import { Component, OnInit, ViewChild } from '@angular/core';
import { Exercise } from 'src/app/services/pages/pages.models';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from 'src/app/services/watch/watch.service';
import { PagesService } from 'src/app/services/pages/pages.service';
import { MenuController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-count-up',
  templateUrl: './count-up.page.html',
  styleUrls: ['./count-up.page.scss'],
})
export class CountUpPage implements OnInit {

  public folder: string;
  timer
  stayOpen = true;
  exerciseQueue:Array<Exercise> = []
  previousButton = {
    disabled: false
  }
  nextButton = {
    disabled: false
  }
  custom = {
    pagination:{
      el: '.swiper-pagination',
      type: 'progressbar'
    }
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private watchService:WatchService,
    private pagesService:PagesService,
    private menu: MenuController,
    ) {
    // this.initTimer(60)
   }
   @ViewChild('slides',{static: false}) slides:IonSlides;
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((response)=>{
      this.folder = response.get('id')
      console.log(response);
    })
   
  }
  async ngAfterViewInit(){
    console.log(this.slides);
    this.watchService.queueEmmiter.subscribe( ()=>{
      this.exerciseQueue = this.watchService.queue
      if(this.slides){
          this.slides.update()
      }
    })
    if(this.slides){
      this.slides.lockSwipes(true)
      this.previousButton.disabled = await this.slides.isBeginning()
      this.nextButton.disabled = await this.slides.isEnd()
    }
    
  }
  initTimer(){
    this.watchService.enableCounter()
    this.watchService.initCountUp(0)
  }
  playTimer(){
    this.watchService.enableCounter()
    if(this.watchService.timers.size == 0){
      this.initTimer()
    }
  }
  refreshTimer(){
    this.initTimer()
    console.log(this.slides);
  }
  pauseTimer(){
    this.watchService.disableCounter()
  }
  openSideMenu(){
    console.log(this.menu);
    this.menu.enable(true,'menu')
    this.menu.open('menu');
  }
  async goPrevious(){
    if(this.slides){
      await this.slides.lockSwipes(false)
      await this.slides.slidePrev()
      await this.slides.lockSwipes(true)
      this.previousButton.disabled = await this.slides.isBeginning()
      this.nextButton.disabled = await this.slides.isEnd() 
      console.log(this.exerciseQueue);
      
    }
  }
  async goNext(){
    if(this.slides){
      await this.slides.lockSwipes(false)
      await this.slides.slideNext()
      await this.slides.lockSwipes(true)
      this.nextButton.disabled = await this.slides.isEnd() 
      this.previousButton.disabled = await this.slides.isBeginning()
      console.log(this.exerciseQueue);
    }
  }

}
