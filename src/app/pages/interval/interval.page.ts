import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { Exercise } from 'src/app/services/exercises/exercises.models';
import { ActivatedRoute } from '@angular/router';
import { ClockerService } from 'src/app/services/clocker/clocker.service';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.page.html',
  styleUrls: ['./interval.page.scss'],
})
export class IntervalPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;


  buttonsController = {
    previous: {
      disabled: false,
      show: true,
    },
    next: {
      disabled: false,
      show: true,
    },
    play: {
      disabled: false,
      show: true,
    },
    pause: {
      disabled: false,
      show: false,
    },
    restart:{
      disabled: false,
      show: false,
    }
  }
  
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
    private clockerService: ClockerService,
    private menu: MenuController,
  ) {
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((response) => {
      this.folder = response.get('id')
      console.log(response);
    })

  }
  async ngAfterViewInit() {
    console.log(this.slides);
    this.clockerService.queueEmmiter.subscribe(() => {
      this.exerciseQueue = this.clockerService.queue
    })
    if (this.slides) {
      this.slides.lockSwipes(true)
      this.previousButton.disabled = await this.slides.isBeginning()
      this.nextButton.disabled = await this.slides.isEnd()
    }

  }
  async initRoutine(indexToBegin) {
    await this.playNextExercise(this.exerciseQueue[indexToBegin],indexToBegin)
  }
  async playNextExercise(exercise:Exercise,index:number){
    this.fixIonBug()
    try{
      await this.cleanCurrentExercise()
      await this.playExercise(exercise,index)
      if((index + 1) < this.exerciseQueue.length ){
        await this.playNextExercise(this.exerciseQueue[index+1],index+1)
      }else{
        this.clockerService.refresh(this.exerciseQueue)
      }
    }catch{

    }
  }
  async playExercise(exercise,index){
    try{
      if(index < this.exerciseQueue.length){
        await this.goTo(index)
        return await this.clockerService.play(exercise)
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
      this.clockerService.resume(this.exerciseQueue[currentElementIndex])
    } else {
      this.initRoutine(0)
    }
  }
  async onPause(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log('Pause Current Element', this.exerciseQueue[currentElementIndex])
    if (currentElementIndex != -1) {
      this.clockerService.pause(this.exerciseQueue[currentElementIndex])
    }
  }
  async onRefresh(){
    this.clockerService.intervalTimer.isRefreshing = true
    this.clockerService.queue = this.exerciseQueue = await this.clockerService.refresh(this.exerciseQueue)
    if (this.slides) {
      this.slides.lockSwipes(true)
      this.previousButton.disabled = await this.slides.isBeginning()
      this.nextButton.disabled = await this.slides.isEnd()
    }
    await this.stopCurrentExercise()
    this.initRoutine(0)
    this.clockerService.intervalTimer.isRefreshing = false
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
    if (this.clockerService.intervalTimer.isRunningDelay) {
      return 'delay'
    } else if (this.clockerService.intervalTimer.isRunningExercise) {
      return 'exercise'
    } else {
      return ''
    }
  }
  allowButtons(exercises: Array<Exercise>) {
    return this.exerciseQueue.length > 0 && !this.clockerService.intervalTimer.isFinished && !this.clockerService.intervalTimer.isRefreshing
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
      await this.clockerService.stop(this.exerciseQueue[currentElementIndex])
      this.exerciseQueue[currentElementIndex] = await this.clockerService.rebuild(this.exerciseQueue[currentElementIndex])
      console.warn('Clean Was NEEDED',this.exerciseQueue[currentElementIndex]);
      await Utils.sleep(100)
    }
    console.log('Clean Was not needed');
  }
  async stopCurrentExercise(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {
      await this.clockerService.stop(this.exerciseQueue[currentElementIndex])
      this.clockerService.intervalTimer.isFinished = true
      console.warn('Clean Was NEEDED',this.exerciseQueue[currentElementIndex]);
      await Utils.sleep(100)
    }
    console.log('Clean Was not needed');
  }

}
