import { Injectable, EventEmitter } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { Exercise, ExerciseInterface } from '../exercises/exercises.models';
import { PagesService } from '../pages/pages.service';
import { Clock, ClockerInterface } from './clocker.class';
import { ExercisesService } from '../exercises/exercises.service';
import { AudioService } from '../audio/audio.service';
import { ClockEvents } from './clocker.interface';
@Injectable({
  providedIn: 'root'
})
export class ClockerService {

  public eventsEmitter: EventEmitter<ClockEvents > = new EventEmitter();
  // tslint:disable-next-line: variable-name
  private _intervalTimer: ClockerInterface = {
    stages: {
      delay: {
        isRunning: false,
        isFinished: false,
        isInitiated: false,

      },
      exercise: {
        isRunning: false,
        isFinished: false,
        isInitiated: false,

      },
    },
    isInitiated: false,

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
    private exerciseServices: ExercisesService,
    private audioService: AudioService
  ) {
  }

  public async play(exercise: Exercise, lastOne = false) {
    this.eventsEmitter.emit('play');
    try {
      const clock = new Clock(this.audioService);
      this.intervalTimer = clock.timer;
      this.init(exercise);
      this.resume(exercise);
      await clock.run(exercise);
      await clock.onDestroy();
      if (lastOne) {
        this.intervalTimer.isInitiated = false;
        this.intervalTimer.isFinished = true;
        this.eventsEmitter.emit('dancing');
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  public async stop(exercise: Exercise, emitEvent = true) {
    exercise.progress.stage.exercise.running = false;
    exercise.progress.stage.exercise.finished = true;
    exercise.progress.stage.delay.running = false;
    exercise.progress.stage.delay.finished = true;
    exercise.progress.finished = true;
    exercise.progress.initiated = false;
    this.intervalTimer.isRunning = false;
    if (emitEvent) { this.eventsEmitter.emit('stop'); }

    return;
  }
  public async stopAll() {
    await this.exerciseServices.exercises.forEach(async (exercise) => {
      await this.stop(exercise, false);
    });
    this.intervalTimer.isInitiated = false;
    this.intervalTimer.isFinished = true;
    this.eventsEmitter.emit('stop');
    return;
  }
  public init(exercise: Exercise) {
    exercise.progress.initiated = true;
    this.intervalTimer.isInitiated = true;
    this.intervalTimer.isRunning = true;
    this.eventsEmitter.emit('init');
  }
  public pause(exercise: Exercise) {
    this.audioService.play('pause');
    exercise.progress.stage.delay.running = false;
    exercise.progress.stage.exercise.running = false;
    this.intervalTimer.isRunning = false;
    this.eventsEmitter.emit('pause');

  }
  public resume(exercise: Exercise) {
    exercise.progress.stage.delay.running = true;
    exercise.progress.stage.exercise.running = true;
    this.intervalTimer.isRunning = true;
    this.eventsEmitter.emit('resume');
    this.audioService.play('resume');

  }
  public async refresh(exercises: Array<Exercise>) {
    this.intervalTimer = {
      isRunning: false,
      isInitiated: false,
      stages: {
        delay: {
          isRunning: false,
          isFinished: false,
          isInitiated: false,
        },
        exercise: {
          isRunning: false,
          isFinished: false,
          isInitiated: false
        },
      },
      isFinished: false,
      isRefreshing: false
    };
    const newExercises = await exercises.map((exercise) => new Exercise(exercise.name, exercise.duration, exercise.delay));
    this.eventsEmitter.emit('refresh');
    return newExercises;
  }
  public async rebuild(exercise: Exercise) {
    const rebuildExercise = await new Exercise(exercise.name, exercise.duration, exercise.delay);
    this.eventsEmitter.emit('rebuild');
    return rebuildExercise;
  }
  public async skipDelay(exercise: Exercise) {
    if (this.intervalTimer.stages.delay.isInitiated && !this.intervalTimer.stages.delay.isFinished) {
      exercise.counter = 3;
    }
  }

}
