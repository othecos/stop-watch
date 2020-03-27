import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../services/watch/watch.service';
import { MenuController, IonSlides } from '@ionic/angular';
import { Exercise } from '../services/pages/pages.models';
import { PagesService } from '../services/pages/pages.service';
import { Utils } from '../classes/utils';
import { ClockTimer } from '../services/watch/watch.class';
import { element } from 'protractor';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  stayOpen = true;
  exerciseQueue: Array<Exercise> = []
  previousButton = {
    disabled: false
  }
  nextButton = {
    disabled: false
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private watchService: WatchService,
    private pagesService: PagesService,
    private menu: MenuController,
  ) {
  }
  @ViewChild('slides', { static: false }) slides: IonSlides;
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((response) => {
      this.folder = response.get('id')
      console.log(response);
    })

  }
  async ngAfterViewInit() {
    console.log(this.slides);
    this.watchService.queueEmmiter.subscribe(() => {
      this.exerciseQueue = this.watchService.queue
    })
    if (this.slides) {
      this.slides.lockSwipes(true)
      this.previousButton.disabled = await this.slides.isBeginning()
      this.nextButton.disabled = await this.slides.isEnd()
    }

  }
  async initRoutine(indexToBegin) {
    if(this.watchService.intervalTimer.isFinished){
      this.exerciseQueue = await this.watchService.refresh(this.exerciseQueue)
    }
    await this.playNextExercise(this.exerciseQueue[indexToBegin],indexToBegin)
  }
  async playNextExercise(exercise:Exercise,index:number){
    try{
      await this.cleanCurrentExercise()
      await this.playExercise(exercise,index)
      if((index + 1) < this.exerciseQueue.length ){
        await this.playNextExercise(this.exerciseQueue[index+1],index+1)
      }
    }catch{

    }
  }
  async playExercise(exercise,index){
    try{
      if(index < this.exerciseQueue.length){
        await this.goTo(index)
        return await this.watchService.play(exercise)
      }
    }catch(err){
      console.error(err);
      throw { status: 'stopped' }
    }
  
  }
  async onPlay(){
    this.fixIonBug()
    let currentElementIndex = this.exerciseQueue.findIndex((exercise) => { return exercise.progress.initiated && !exercise.progress.finished })
    console.log('Play Current Element', this.exerciseQueue[currentElementIndex])
    if (currentElementIndex != -1) {
      this.watchService.resume(this.exerciseQueue[currentElementIndex])
    } else {
      this.initRoutine(0)
    }
  }
  async onPause(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log('Pause Current Element', this.exerciseQueue[currentElementIndex])
    if (currentElementIndex != -1) {
      this.watchService.pause(this.exerciseQueue[currentElementIndex])
    }
  }
  async onRefresh(){
    this.watchService.intervalTimer.isRefreshing = true
    await this.stopCurrentExercise()
    this.initRoutine(0)
    this.watchService.intervalTimer.isRefreshing = false
  }
  openSideMenu() {
    this.menu.enable(true, 'menu')
    this.menu.open('menu');
  }
  async goPrevious() {
    if (this.slides) {
        await this.slides.lockSwipes(false)
        await this.slides.slidePrev()
        await this.slides.lockSwipes(true)
        await this.updateSlides()
        this.previousButton.disabled = await this.slides.isBeginning()
        this.nextButton.disabled = await this.slides.isEnd()
        await Utils.sleep(2000)
    }
    
    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log("Current element index",currentElementIndex);
    if(currentElementIndex != -1 && ((currentElementIndex - 1) >= 0)){
      await this.playNextExercise(this.exerciseQueue[currentElementIndex-1],currentElementIndex-1)
    }
    
  }
  async goNext() {
    if (this.slides) {
        await this.slides.lockSwipes(false)
        await this.slides.slideNext()
        await this.slides.lockSwipes(true)
        this.nextButton.disabled = await this.slides.isEnd()
        this.previousButton.disabled = await this.slides.isBeginning()
        await Utils.sleep(2000)
    }
  
    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log("Current element index",currentElementIndex);
    
    if(currentElementIndex != -1 && ((currentElementIndex + 1) < this.exerciseQueue.length)){
      await this.playNextExercise(this.exerciseQueue[currentElementIndex+1],currentElementIndex+1)
    }
    
  }
  async goTo(index) {
    if (this.slides) {
      await this.slides.lockSwipes(false)
      await this.slides.slideTo(index)
      await this.slides.lockSwipes(true)
      this.nextButton.disabled = await this.slides.isEnd()
      this.previousButton.disabled = await this.slides.isBeginning()
    }
  }
  async updateSlides(counter = 0) {
    if (this.slides) {
      await this.slides.update()
      return true
    } else if (counter < 3) {
      await Utils.sleep(200)
      return this.updateSlides(++counter)
    } else {
      return false
    }
  }
  getTextClass() {
    if (this.watchService.intervalTimer.isRunningDelay) {
      return 'delay'
    } else if (this.watchService.intervalTimer.isRunningExercise) {
      return 'exercise'
    } else {
      return ''
    }
  }
  allowButtons(exercises: Array<Exercise>) {
    return this.exerciseQueue.length > 0 && !this.watchService.intervalTimer.isFinished && !this.watchService.intervalTimer.isRefreshing
  }
  async fixIonBug() {
    let ionSlide = document.body.getElementsByTagName('ion-slide')
    for (let index = 0; index < ionSlide.length; index++) {
      const element = ionSlide.item(index);
      element.classList.remove('full')
    }
    await this.updateSlides()
  }
  async getCurrentExerciseIndex(){
     return await this.exerciseQueue.findIndex((exercise) => { return exercise.progress.initiated && !exercise.progress.finished })
  }
  async cleanCurrentExercise(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {
      await this.watchService.stop(this.exerciseQueue[currentElementIndex])
      this.exerciseQueue[currentElementIndex] = await this.watchService.rebuild(this.exerciseQueue[currentElementIndex])
      console.warn('Clean Was NEEDED',this.exerciseQueue[currentElementIndex]);
      await Utils.sleep(100)
    }
    console.log('Clean Was not needed');
  }
  async stopCurrentExercise(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {
      await this.watchService.stop(this.exerciseQueue[currentElementIndex])
      this.watchService.intervalTimer.isFinished = true
      console.warn('Clean Was NEEDED',this.exerciseQueue[currentElementIndex]);
      await Utils.sleep(100)
    }
    console.log('Clean Was not needed');
  }

}

