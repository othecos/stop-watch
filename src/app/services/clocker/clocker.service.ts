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

  queueEmmiter: EventEmitter<void> = new EventEmitter()

  private _intervalTimer: ClockerInterface = {
    value: 0,
    isRunning: false,
    isRunningDelay: false,
    isRunningExercise: false,
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

    try {
      let clock = new Clock()
      this.intervalTimer = clock.time;
      this.init(exercise)
      await clock.runDelay(exercise)
      await clock.runExercise(exercise)
      exercise.progress.finished = true
      clock.onDestroy()
    } catch (err) {
      throw { status: 'stopped' }
    }
  }
  public async stop(exercise: Exercise) {
    exercise.progress.stage.exercise.running = false
    exercise.progress.stage.delay.running = false
    exercise.progress.stage.exercise.finished = true
    exercise.progress.stage.delay.finished = true
    exercise.progress.finished = true;
    exercise.progress.initiated = false;
    return
  }
  public pause(exercise: Exercise) {
    exercise.progress.stage.delay.running = false
    exercise.progress.stage.exercise.running = false
    this.intervalTimer.isRunning = false
  }
  public resume(exercise: Exercise) {
    exercise.progress.stage.delay.running = true
    exercise.progress.stage.exercise.running = true
    this.intervalTimer.isRunning = true
  }
  public init(exercise: Exercise) {
    exercise.progress.initiated = true
  }
  public async refresh(exercises: Array<Exercise>) {
    this.intervalTimer = {
      value: 0,
      isRunning: false,
      isRunningDelay: false,
      isRunningExercise: false,
      isFinished: false,
      isRefreshing: false
    }
    return await exercises.map((exercise) => new Exercise(exercise.name, exercise.duration, exercise.delay))
  }
  public async rebuild(exercise) {
    return await new Exercise(exercise.name, exercise.duration, exercise.delay)
  }
}
