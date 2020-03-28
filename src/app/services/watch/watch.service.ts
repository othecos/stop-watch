import { Injectable, EventEmitter } from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Exercise, ExerciseInterface } from '../pages/pages.models';
import { PagesService } from '../pages/pages.service';
import { Clock, ClockTimer } from './watch.class';
@Injectable({
  providedIn: 'root'
})
export class WatchService {

  timers: Set<Subscription> = new Set()


  queue: Array<Exercise> = []
  queueEmmiter: EventEmitter<void> = new EventEmitter()

  timer: number = 0
  isRunning: boolean = false

  private _intervalTimer: ClockTimer = {
    value: 0,
    isRunning: false,
    isRunningDelay: false,
    isRunningExercise: false,
    isFinished: false,
    isRefreshing: false,
  };
  public get intervalTimer():ClockTimer {
    return this._intervalTimer;
  }
  public set intervalTimer(value:ClockTimer) {
    this._intervalTimer = value;
  }
  constructor(private pagesService: PagesService) {
    this.pagesService.onExerciseChanged.subscribe((exercises) => {
      console.log(exercises);
      this.queue = [...exercises]
      this.queueEmmiter.emit()
    })
  }




  setTimer(seconds) {
    this.timer = seconds
  }
  /**
   * Init countDown of timer
   * @param {number} delay 
   */
  initCountDown(delay: number = 0) {
    if (this.timers.size == 0) {
      let counter = timer(delay, 1000).subscribe((timeEllapsed) => {
        if (this.isRunning) {
          if (this.timer > 0) {
            this.timer--
          } else {
            this.timers.delete(counter)
            counter.unsubscribe()
          }
        }
      })
      this.timers.add(counter)
    }
    return this.timers
  }
  /**
   * Init countUp of timer
   * @param {number} delay 
   */
  initCountUp(delay: number = 0) {
    if (this.timers.size == 0) {
      let counter = timer(delay, 1000).subscribe((timeEllapsed) => {
        if (this.isRunning) {
          if (this.timer > 0) {
            this.timer++
          } else {
            this.timers.delete(counter)
            counter.unsubscribe()
          }
        }
      })
      this.timers.add(counter)
    }
    return this.timers
  }
  enableCounter() {
    this.intervalTimer.isRunning = true
  }
  disableCounter() {
    this.intervalTimer.isRunning = false
  }
  public async play(exercise: Exercise) {
    
    try{
      let clock = new Clock()
      this.intervalTimer = clock.time;
      this.init(exercise)
      await clock.runDelay(exercise)
      await clock.runExercise(exercise)
      exercise.progress.finished = true
      clock.onDestroy()
    }catch(err){
      throw { status: 'stopped'}
    }
  }
  public async stop(exercise:Exercise){
    exercise.progress.stage.exercise.running = false
    exercise.progress.stage.delay.running = false
    exercise.progress.stage.exercise.finished = true
    exercise.progress.stage.delay.finished = true
    exercise.progress.finished = true;
    exercise.progress.initiated = false;
    return 
  }
  public pause(exercise:Exercise){
    exercise.progress.stage.delay.running = false
    exercise.progress.stage.exercise.running = false
    this.intervalTimer.isRunning = false
  }
  public resume(exercise:Exercise){
    exercise.progress.stage.delay.running = true
    exercise.progress.stage.exercise.running = true
    this.intervalTimer.isRunning = true
  }
  public init(exercise:Exercise){
    exercise.progress.initiated = true
  }
  public async refresh(exercises:Array<Exercise>){
    this.intervalTimer={
      value: 0,
      isRunning: false,
      isRunningDelay: false,
      isRunningExercise: false,
      isFinished: false,
      isRefreshing: false
    }
    return await exercises.map( (exercise) => new Exercise(exercise.name,exercise.duration,exercise.delay))
  }
  public async rebuild(exercise){
    return await new Exercise(exercise.name,exercise.duration,exercise.delay)
  }
}
