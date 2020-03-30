import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonSlides, MenuController, ModalController, AlertController } from '@ionic/angular';
import { Exercise } from 'src/app/services/exercises/exercises.models';
import { ActivatedRoute } from '@angular/router';
import { ClockerService } from 'src/app/services/clocker/clocker.service';
import { Utils } from 'src/app/classes/utils';
import { ExercisesPage } from 'src/app/modals/exercises/exercises.page';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { Subscription } from 'rxjs';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { AudioService } from 'src/app/services/audio/audio.service';

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
  exerciseQueue: Array<Exercise> = []
  constructor(
    private clockerService: ClockerService,
    private exercisesService: ExercisesService,
    private menu: MenuController,
    private modalController: ModalController,
    private alertController:AlertController,
    private utils:IonicUtilsService,
    private audioService:AudioService
  ) {
  }
  ngOnInit() {

  }
  async ngAfterViewInit() {

    await this.checkNavigationButtonState()
    let exerciseSubscription = this.exercisesService.eventEmitter.subscribe((event:{
      eventName: "add" | "remove" | "replace" | "clear";
      element: Array<Exercise>;
  }) => {
      if (this.slides) {
        this.slides.lockSwipes(true)
      }
      console.log(event.eventName,event.element);
      
      switch (event.eventName) {
        case 'remove':
          if(event.element && event.element.length > 0 ) this.clockerService.stop(event.element[0])
          break;
        case 'add':
        case 'replace':
        case 'clear':
          this.fixIonBug()
          this.updateButtonController()
        default:
      }
    })
    this.subscriptions.push(exerciseSubscription)
    let clockerSubscription = this.clockerService.eventsEmitter.subscribe(async (event) => {
      switch (event) {
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

  public async onPlay() {
    let currentElementIndex = await this.getCurrentExerciseIndex()
    if (currentElementIndex != -1) {
      this.clockerService.resume(this.exercisesService.exercises[currentElementIndex])
    } else {
      this.initRoutine(0)
    }
  }
  public async onPause() {

    let currentElementIndex = await this.getCurrentExerciseIndex()
    console.log(currentElementIndex);
    
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
  public async onClearExerciseList() {
   await this.utils.presentAlertConfirm('Clear', 'Clear exercise list?',async()=>{
    await this.clockerService.stopAll()
    this.exercisesService.clear()
   })
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

  public getAnimationClasses(exercise:Exercise) {
    let classes = []
    if(exercise){
      if(exercise.progress.stage.delay.running && exercise.counter < 5){
        classes.push('blink')
      }
      if (exercise.progress.initiated) {
        if(exercise.progress.stage.exercise.running && !exercise.progress.stage.exercise.finished){
          classes.push('exercise')
        } 
        if(exercise.progress.stage.delay.running && !exercise.progress.stage.delay.finished){
          classes.push('delay')
        }
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
    await this.playNextExercise(this.exercisesService.exercises[indexToBegin], indexToBegin)
  }
  private async playNextExercise(exercise: Exercise, index: number) {
   
    try {
      await this.cleanCurrentExercise()
      await this.playExercise(exercise, index)
      if ((index + 1) < this.exercisesService.exercises.length) {
        await this.playNextExercise(this.exercisesService.exercises[index + 1], index + 1)
      } else {
        this.clockerService.refresh(this.exercisesService.exercises)
      }
    } catch{

    }
  }
  private async playExercise(exercise, index) {
    try {
      if (index < this.exercisesService.exercises.length) {
        await this.goTo(index)
        return await this.clockerService.play(exercise)
      }
    } catch (err) {
      console.error(err);
      throw { status: 'stopped' }
    }

  }

  private async fixIonBug() {
    let ionSlide = document.body.getElementsByTagName('ion-slide')
    for (let index = 0; index < ionSlide.length; index++) {
      const element = ionSlide.item(index);
      element.classList.remove('full')
    }
    await this.updateSlides()
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
    try{
      this.buttonsController.previous.disabled = await this.slides.isBeginning()
      this.buttonsController.next.disabled = await this.slides.isEnd()
    }catch{ }
    this.buttonsController.previous.show = this.exercisesService.hasExercises()
    this.buttonsController.next.show = this.exercisesService.hasExercises()
  }
  private updateButtonController() {
    //Play
    this.buttonsController.play.disabled = !this.exercisesService.hasExercises()
    this.buttonsController.play.show = !this.clockerService.intervalTimer.isRunning;

    //Stop
    this.buttonsController.stop.disabled = !this.clockerService.intervalTimer.isRunning;
    this.buttonsController.stop.show = this.exercisesService.hasExercises()

    //Pause
    this.buttonsController.pause.disabled = !this.clockerService.intervalTimer.isRunning;
    this.buttonsController.pause.show = this.exercisesService.hasExercises()

    //Restart
    this.buttonsController.restart.disabled = !this.clockerService.intervalTimer.isRunning;
    this.buttonsController.restart.show = this.exercisesService.hasExercises();

    //Clear
    this.buttonsController.clear.disabled = this.clockerService.intervalTimer.isRunning;;
    this.buttonsController.clear.show = this.exercisesService.hasExercises();

    //ExerciseModal
    this.buttonsController.exerciseModal.disabled = this.clockerService.intervalTimer.isRunning;
    this.buttonsController.exerciseModal.show = true

    //Next
    //Previous
    this.checkNavigationButtonState()
    
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe())
  }
}
