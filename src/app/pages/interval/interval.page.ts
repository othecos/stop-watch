import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Exercise, ExerciseEvents } from 'src/app/services/exercises/exercises.models';
import { ClockerService } from 'src/app/services/clocker/clocker.service';
import { Utils } from 'src/app/classes/utils';
import { ExercisesPage } from 'src/app/modals/exercises/exercises.page';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { Subscription } from 'rxjs';
import { AudioService } from 'src/app/services/audio/audio.service';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { VolumeComponent } from 'src/app/components/popovers/volume/volume.component';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.page.html',
  styleUrls: ['./interval.page.scss'],
})
export class IntervalPage implements OnInit, OnDestroy {

  @ViewChild('slides', { static: false }) slides: IonSlides;


  subscriptions: Array<Subscription> = []
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
    stop: {
      disabled: false,
      show: false,
    },
    restart: {
      disabled: true,
      show: false,
    },
    clear: {
      disabled: true,
      show: false,
    },
    exerciseModal: {
      disabled: false,
      show: true,
      animate: true,
    }
  }

  stayOpen = true;
  enableDancing = false;
  playFireworks = false;
  constructor(
    private clockerService: ClockerService,
    public exercisesService: ExercisesService,
    private modalController: ModalController,
    public audioService:AudioService,
    public utils:IonicUtilsService,
  ) {
  }
  async ngOnInit() {
    await this.updateButtonController()
    let exerciseSubscription = this.exercisesService.eventEmitter.subscribe((event: {
      eventName: ExerciseEvents;
      element: Array<Exercise>;
    }) => {
      switch (event.eventName) {
        case 'remove':
          if (event.element && event.element.length > 0) this.clockerService.stop(event.element[0])
          break;
        default:
          this.fixIonBug()
          this.updateButtonController()
      }
    })
    this.subscriptions.push(exerciseSubscription)
    let clockerSubscription = this.clockerService.eventsEmitter.subscribe(async (event) => {
      
      switch (event) {
        case 'dancing':
          this.playFireworks = true
        
          setTimeout(() => {
              this.playFireworks = false
          }, 6000);
          break;
        case "stop":
        case "pause":
        case "refresh":
        case "rebuild":
        case "resume":
        case 'general':
          this.updateButtonController()
        default:
          break;
      }
    })
    this.subscriptions.push(clockerSubscription)
  }
  async ngAfterViewInit() {

  }

  public async onPlay() {
    
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {
      this.clockerService.resume(this.exercisesService.exercises[currentElementIndex])
    } else {
      await this.initRoutine(0)
      await this.updateButtonController
    }
  }
  public async onPause() {

    let currentElementIndex = await this.getCurrentExerciseIndex()

    if (currentElementIndex != -1) {
      this.clockerService.pause(this.exercisesService.exercises[currentElementIndex])
    }
  }
  public async onRefresh() {
    await this.clockerService.stopAll()
    let refreshedExercises = await this.clockerService.refresh(this.exercisesService.exercises)
    this.exercisesService.replace(refreshedExercises)
    this.initRoutine(0)
  }
  public async onStop() {
    await this.clockerService.stopAll()
    let refreshedExercises = await this.clockerService.refresh(this.exercisesService.exercises)
    this.exercisesService.replace(refreshedExercises)
    await this.goTo(0)
  }
  public async onOpenModalExercise() {
    this.buttonsController.exerciseModal.animate = false
    await this.presentModal()
  }


  public async goPrevious() {
    if (this.slides) {
      await this.slides.lockSwipes(false)
      await this.slides.slidePrev()
      await this.slides.lockSwipes(true)
      await this.fixIonBug()
      await this.checkNavigationButtonState()
    }

    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1 && ((currentElementIndex - 1) >= 0)) {
      await this.playNextExercise(this.exercisesService.exercises[currentElementIndex - 1], currentElementIndex - 1)
    }

  }
  public async goNext() {
    if (this.slides) {
      await this.slides.lockSwipes(false)
      await this.slides.slideNext()
      await this.slides.lockSwipes(true)
      await this.fixIonBug()
      await this.checkNavigationButtonState()
    }

    let currentElementIndex = await this.getCurrentExerciseIndex()

    if (currentElementIndex != -1 && ((currentElementIndex + 1) < this.exercisesService.exercises.length)) {
      await this.playNextExercise(this.exercisesService.exercises[currentElementIndex + 1], currentElementIndex + 1)
    }

  }
  public async goTo(index) {
    if (this.slides) {
      await this.slides.lockSwipes(false)
      await this.slides.slideTo(index)
      await this.slides.lockSwipes(true)
      await this.fixIonBug()
      await this.checkNavigationButtonState()
    }
  }

  public  getAnimationClasses(exercise: Exercise) {
    let classes = []

    if (!exercise) {
      exercise = this.exercisesService.exercises.find((exercise) => { return exercise.progress.initiated && !exercise.progress.finished })
    }
    if(this.enableDancing){
      classes.push('dancing-side')
    }
    
    if (this.clockerService.intervalTimer.isRunning && exercise.counter <= 5) {
      classes.push('bounce')
    }
    if (this.clockerService.intervalTimer.isInitiated && !this.clockerService.intervalTimer.isFinished) {
      if (this.clockerService.intervalTimer.stages.exercise.isInitiated && !this.clockerService.intervalTimer.stages.exercise.isFinished) {
        classes.push('exercise')
      }
      else if (this.clockerService.intervalTimer.stages.delay.isInitiated && !this.clockerService.intervalTimer.stages.delay.isFinished) {
        classes.push('delay')
      }
    }

    return classes
  }
  private async presentModal() {
    const modal = await this.modalController.create({
      component: ExercisesPage,
      swipeToClose: true
    });
    return await modal.present();
  }

  private async updateSlides(counter = 0) {
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

  private async initRoutine(indexToBegin) {
    this.audioService.initExerciseSounds()
    await this.playNextExercise(this.exercisesService.exercises[indexToBegin], indexToBegin)
  }
  private async playNextExercise(exercise: Exercise, index: number) {

    try {
      await this.cleanCurrentExercise()
      await this.playExercise(exercise, index)
      if ((index + 1) < this.exercisesService.exercises.length) {
        await this.playNextExercise(this.exercisesService.exercises[index + 1], index + 1)
      } else {
        await this.updateButtonController()
      }
    } catch{

    }
  }
  private async playExercise(exercise, index) {
    try {
      if (index < this.exercisesService.exercises.length) {
        await this.goTo(index)
        return await this.clockerService.play(exercise, index == this.exercisesService.exercises.length - 1)
      }
    } catch (err) {
      console.warn(err);
      throw { status: 'stopped' }
    }

  }

  private async fixIonBug() {
    if (this.exercisesService.exercises.length > 2) {
      let ionSlide = document.body.getElementsByTagName('ion-slide')
      for (let index = 0; index < ionSlide.length; index++) {
        const element = ionSlide.item(index);
        element.classList.remove('full')
      }
      await this.updateSlides()
    }
  }
  private async getCurrentExerciseIndex() {
    return await this.exercisesService.exercises.findIndex((exercise) => { return exercise.progress.initiated && !exercise.progress.finished })
  }
  private async cleanCurrentExercise() {
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {

      await this.clockerService.stop(this.exercisesService.exercises[currentElementIndex])
      this.exercisesService.exercises[currentElementIndex] = await this.clockerService.rebuild(this.exercisesService.exercises[currentElementIndex])
    }
  }

  private async checkNavigationButtonState() {
    try {
      this.buttonsController.previous.disabled = await this.slides.isBeginning()
      this.buttonsController.next.disabled = await this.slides.isEnd()
    } catch{ }
    this.buttonsController.previous.show = this.exercisesService.hasExercises()
    this.buttonsController.next.show = this.exercisesService.hasExercises()
  }
  private async updateButtonController() {

    //Play
    this.buttonsController.play.disabled = !this.exercisesService.hasExercises() || this.clockerService.intervalTimer.isFinished
    this.buttonsController.play.show = !this.clockerService.intervalTimer.isRunning;

    //Stop
    this.buttonsController.stop.disabled = !this.clockerService.intervalTimer.isInitiated;
    this.buttonsController.stop.show = this.exercisesService.hasExercises() || !this.clockerService.intervalTimer.isFinished

    //Pause
    this.buttonsController.pause.disabled = !this.clockerService.intervalTimer.isRunning ;
    this.buttonsController.pause.show = this.clockerService.intervalTimer.isRunning && !this.clockerService.intervalTimer.isFinished;

    //Restart
    this.buttonsController.restart.disabled = !(this.clockerService.intervalTimer.isFinished || this.clockerService.intervalTimer.isRunning)
    this.buttonsController.restart.show = this.exercisesService.hasExercises()

    //ExerciseModal
    this.buttonsController.exerciseModal.disabled = this.clockerService.intervalTimer.isRunning;
    this.buttonsController.exerciseModal.show = true
    this.buttonsController.exerciseModal.animate = !this.exercisesService.hasExercises()

    //Next
    //Previous
    await this.lockSlides()
    this.checkNavigationButtonState()
  }
  getTitle() {
    if (this.clockerService.intervalTimer.isInitiated && !this.clockerService.intervalTimer.isFinished) {
      if (this.clockerService.intervalTimer.stages.delay.isInitiated && !this.clockerService.intervalTimer.stages.delay.isFinished) {
        return 'Delay'
      } else {
        return 'Exercise'
      }
    } else {
      return 'Interval Timer'
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe())
  }
  private async lockSlides(counter = 0) {
    if (this.slides) {
      await this.slides.lockSwipes(true)
      return true
    } else if (counter < 3) {
      await Utils.sleep(200)
      return this.lockSlides(++counter)
    } else {
      return false
    }
  }
  async onChangeVolume($event){
    await this.utils.presentPopover($event,VolumeComponent)
  }
  onToggleMuted(){

    if(this.audioService.isMuted){
      this.audioService.unMute()
    }else{
      this.audioService.mute()
    }
  }
  async onJumpToExercise(){
    if(this.clockerService.intervalTimer.stages.delay.isInitiated && !this.clockerService.intervalTimer.stages.delay.isFinished){
      let currentElementIndex = await this.getCurrentExerciseIndex()
      if(currentElementIndex != -1){
        this.clockerService.skipDelay(this.exercisesService.exercises[currentElementIndex])
      }
    }
  }
  isDelayRunning(counter){
    return this.clockerService.intervalTimer.stages.delay.isInitiated && this.clockerService.intervalTimer.stages.delay.isRunning && !this.clockerService.intervalTimer.stages.delay.isFinished && counter > 5
  }
  onDestroy(){
    this.audioService.finishExerciseSounds()
  }
}
