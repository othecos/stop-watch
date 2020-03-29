import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, ModalController } from '@ionic/angular';
import { Exercise } from 'src/app/services/exercises/exercises.models';
import { ActivatedRoute } from '@angular/router';
import { ClockerService } from 'src/app/services/clocker/clocker.service';
import { Utils } from 'src/app/classes/utils';
import { ExercisesPage } from 'src/app/modals/exercises/exercises.page';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

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
      show: false,
    },
    play: {
      disabled: true,
      show: true,
    },
    pause: {
      disabled: false,
      show: false,
    },
    restart:{
      disabled: true,
      show: false,
    },
    clear:{
      disabled: true,
      show: true, 
    },
    exerciseModal:{
      disabled: false,
      show: true,
    }
  }
  
  stayOpen = true;
  exerciseQueue: Array<Exercise> = []
  constructor(
    private clockerService: ClockerService,
    private exercisesService:ExercisesService,
    private menu: MenuController,
    private modalController:ModalController
  ) {
  }
  ngOnInit() {

  }
  async ngAfterViewInit() {
    console.log(this.slides);
    
    if (this.slides) {
      this.slides.lockSwipes(true)
    }
    await this.checkNavigationButtonState()

  }
  async initRoutine(indexToBegin) {
    await this.playNextExercise(this.exercisesService.exercises[indexToBegin],indexToBegin)
  }
  async playNextExercise(exercise:Exercise,index:number){
    this.fixIonBug()
    try{
      await this.cleanCurrentExercise()
      await this.playExercise(exercise,index)
      if((index + 1) < this.exercisesService.exercises.length ){
        await this.playNextExercise(this.exercisesService.exercises[index+1],index+1)
      }else{
        this.clockerService.refresh(this.exercisesService.exercises)
      }
    }catch{

    }
  }
  async playExercise(exercise,index){
    try{
      if(index < this.exercisesService.exercises.length){
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
    let currentElementIndex = this.exercisesService.exercises.findIndex((exercise) => { return exercise.progress.initiated && !exercise.progress.finished })
    console.log('Play Current Element', this.exercisesService.exercises[currentElementIndex])
    if (currentElementIndex != -1) {
      this.clockerService.resume(this.exercisesService.exercises[currentElementIndex])
    } else {
      this.initRoutine(0)
    }
  }
  async onPause(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log('Pause Current Element', this.exercisesService.exercises[currentElementIndex])
    if (currentElementIndex != -1) {
      this.clockerService.pause(this.exercisesService.exercises[currentElementIndex])
    }
  }
  async onRefresh(){
    this.clockerService.intervalTimer.isRefreshing = true
    let refreshedExercises = await this.clockerService.refresh(this.exercisesService.exercises)
    this.exercisesService.replace(refreshedExercises)
    if (this.slides) {
      this.slides.lockSwipes(true)
      await this.checkNavigationButtonState()
    }
    await this.stopCurrentExercise()
    this.initRoutine(0)
    this.clockerService.intervalTimer.isRefreshing = false
  }
  async onOpenModalExercise() {
    await this.presentModal()
  }
  async onClearExerciseList(){
    this.exercisesService.clear()
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ExercisesPage,
      swipeToClose: true
    });
    return await modal.present();
  }
  async goPrevious() {
    if (this.slides) {
        await this.slides.lockSwipes(false)
        await this.slides.slidePrev()
        await this.slides.lockSwipes(true)
        await this.updateSlides()
        await this.checkNavigationButtonState()
    }
    
    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log("Current element index",currentElementIndex);
    if(currentElementIndex != -1 && ((currentElementIndex - 1) >= 0)){
      await this.playNextExercise(this.exercisesService.exercises[currentElementIndex-1],currentElementIndex-1)
    }
    
  }
  async goNext() {
    if (this.slides) {
        await this.slides.lockSwipes(false)
        await this.slides.slideNext()
        await this.slides.lockSwipes(true)
        await this.checkNavigationButtonState()
    }
  
    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log("Current element index",currentElementIndex);
    
    if(currentElementIndex != -1 && ((currentElementIndex + 1) < this.exercisesService.exercises.length)){
      await this.playNextExercise(this.exercisesService.exercises[currentElementIndex+1],currentElementIndex+1)
    }
    
  }
  async goTo(index) {
    if (this.slides) {
      await this.slides.lockSwipes(false)
      await this.slides.slideTo(index)
      await this.slides.lockSwipes(true)
      await this.checkNavigationButtonState()
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
    
    return this.exercisesService.exercises.length > 0 && !this.clockerService.intervalTimer.isFinished && !this.clockerService.intervalTimer.isRefreshing
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
     return await this.exercisesService.exercises.findIndex((exercise) => { return exercise.progress.initiated && !exercise.progress.finished })
  }
  async cleanCurrentExercise(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {
      await this.clockerService.stop(this.exercisesService.exercises[currentElementIndex])
      this.exercisesService.exercises[currentElementIndex] = await this.clockerService.rebuild(this.exercisesService.exercises[currentElementIndex])
      console.warn('Clean Was NEEDED',this.exercisesService.exercises[currentElementIndex]);
      await Utils.sleep(100)
    }
    console.log('Clean Was not needed');
  }
  async stopCurrentExercise(){
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {
      await this.clockerService.stop(this.exercisesService.exercises[currentElementIndex])
      this.clockerService.intervalTimer.isFinished = true
      console.warn('Clean Was NEEDED',this.exercisesService.exercises[currentElementIndex]);
      await Utils.sleep(100)
    }
    console.log('Clean Was not needed');
  }

  async checkNavigationButtonState(){
    if (this.slides) {
      this.buttonsController.previous.disabled = await this.slides.isBeginning()
      this.buttonsController.next.disabled = await this.slides.isEnd() 
    }
    this.buttonsController.previous.show = this.exercisesService.hasExercises()
    this.buttonsController.next.show = this.exercisesService.hasExercises()
  }
}
