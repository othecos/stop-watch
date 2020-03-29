import { Injectable, EventEmitter } from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Exercise, ExerciseInterface } from '../exercises/exercises.models';
import { PagesService } from '../pages/pages.service';
import { Clock, ClockerInterface } from './clocker.class';
import { ExercisesService } from '../exercises/exercises.service';
@Injectable({
  providedIn: 'root'
})
export class ClockerService {

  public eventsEmitter:EventEmitter<'stop' | 'play' | 'pause' | 'init' | 'resume' | 'refresh' | 'rebuild' | 'general'> = new EventEmitter()
  private _intervalTimer: ClockerInterface = {
    stages: {
      delay: {
        isRunning: false,
        isFinished: false
      },
      exercise: {
        isRunning: false,
        isFinished: false
      },
    },
    isRunning: false,
    isFinished: false,
    isRefreshing: false,
  };
  public get intervalTimer(): ClockerInterface {
    return this._intervalTimer;
  }
  public set intervalTimer(value: ClockerInterface) {
    this._intervalTimer = value;
  }
  constructor(
    private exerciseServices: ExercisesService
  ) {
  }

  public async play(exercise: Exercise) {
    this.eventsEmitter.emit('play')
    try {
      let clock = new Clock()
      this.intervalTimer = clock.timer;
      this.watchChanges(clock)
      this.init(exercise)
      this.resume(exercise)
      await clock.run(exercise)
      await clock.onDestroy()
    } catch (err) {
      console.error(err);
      throw err
    }
  }
  watchChanges(clock:Clock){
    // clock.eventsEmitter.subscribe((res)=>{
    //   console.log(res);
    //   this.eventsEmitter.emit('general');
    // })
  }
  public async stop(exercise: Exercise,emitEvent = true) {
    exercise.progress.stage.exercise.running = false
    exercise.progress.stage.exercise.finished = true
    exercise.progress.stage.delay.running = false
    exercise.progress.stage.delay.finished = true
    exercise.progress.finished = true;
    exercise.progress.initiated = false;
    this.intervalTimer.isRunning = false
    if(emitEvent) this.eventsEmitter.emit('stop');

    return
  }
  public async stopAll() {
    await this.exerciseServices.exercises.forEach(async (exercise) => {
      await this.stop(exercise,false)
    })
    this.eventsEmitter.emit('stop')
    return
  }
  public init(exercise:Exercise){
    exercise.progress.initiated = true
    this.intervalTimer.isRunning = true
    this.eventsEmitter.emit('init')
  }
  public pause(exercise: Exercise) {
    exercise.progress.stage.delay.running = false
    exercise.progress.stage.exercise.running = false
    this.intervalTimer.isRunning = false
    this.eventsEmitter.emit('pause')

  }
  public resume(exercise: Exercise) {
    exercise.progress.stage.delay.running = true
    exercise.progress.stage.exercise.running = true
    this.intervalTimer.isRunning = true
    this.eventsEmitter.emit('resume')

  }
  public async refresh(exercises: Array<Exercise>) {
    this.intervalTimer = {
      isRunning: false,
      stages: {
        delay: {
          isRunning: false,
          isFinished: false
        },
        exercise: {
          isRunning: false,
          isFinished: false
        },
      },
      isFinished: false,
      isRefreshing: false
    }
    let newExercises = await exercises.map((exercise) => new Exercise(exercise.name, exercise.duration, exercise.delay))
    this.eventsEmitter.emit('refresh')
    return newExercises
  }
  public async rebuild(exercise) {
    let rebuildExercise = await new Exercise(exercise.name, exercise.duration, exercise.delay)
    this.eventsEmitter.emit('rebuild')
    return rebuildExercise
  }
}
