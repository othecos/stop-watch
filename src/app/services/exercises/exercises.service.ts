import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Exercise, ExerciseEvents } from './exercises.models';
import { StorageService } from '../storage/storage.service';
import { IonicUtilsService } from '../utils/ionic-utils.service';


@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  public eventEmitter: EventEmitter<{ eventName: ExerciseEvents, element: Array<Exercise> }> = new EventEmitter()

  private _exercises: Array<Exercise> = [];

  public get exercises(): Array<Exercise> {
    return this._exercises;
  }
  constructor(private browserStorage: StorageService, private utils: IonicUtilsService) {
    this.eventEmitter.subscribe((event) => {
      if (event.eventName != 'load') this.saveStorage()
    })
    this.loadStorageExercise()
  }
  /**
   * 
   * @param exercises 
   * @description Add multiples exercises to instance
   */
  public async addMany(exercises: Array<Exercise>) {
    if (Array.isArray(exercises) && exercises.length > 0) {
      await exercises.forEach(async element => {
        this.add(element, false)
      });
    }
    this.eventEmitter.emit({ eventName: 'add', element: exercises })
  }
  /**
   * 
   * @param exercises 
   * @description Add one exercise to instance
   */
  public add(exercise: Exercise, emitEvent: boolean = true) {
    if (exercise) {
      this.exercises.push(exercise)
      this.utils.presentToast(`Added <b>${exercise.name}</b> exercise`, 1000, 'top', 'success')
    }
    if (emitEvent) this.eventEmitter.emit({ eventName: 'add', element: [exercise] })
  }
  public async remove(exercise: Exercise) {
    if (exercise) {
      let findIndex = this.exercises.findIndex((ex) => ex.id == exercise.id)
      if (findIndex != -1) {
        await this.exercises.splice(findIndex, 1);
        this.utils.presentToast(`Removed <b>${exercise.name}</b> exercise`, 1000, 'bottom', 'danger')
        this.eventEmitter.emit({ eventName: 'remove', element: [exercise] })
      }
    }

  }
  public async update(exercise: Exercise) {
    if (exercise) {
      let index = this.exercises.findIndex((ex) => ex.id == exercise.id)
      if (index != -1) {
        this.exercises[index].duration = exercise.duration
        this.exercises[index].delay = exercise.delay
        this.exercises[index].name = exercise.name
        this.utils.presentToast(`Updated <b>${exercise.name}</b> exercise`, 1000, 'bottom', 'success')
        this.eventEmitter.emit({ eventName: 'updated', element: [exercise] })
      }
    }

  }
  public clear() {
    this._exercises = []
    this.eventEmitter.emit({ eventName: 'clear', element: [] })
    this.utils.presentToast(`Clear exercise list`, 1000)
  }
  public replace(exercises: Array<Exercise>, passBy: 'ref' | 'value' = 'ref') {
    if (Array.isArray(exercises)) this._exercises = [...exercises]
    this.eventEmitter.emit({ eventName: 'replace', element: exercises })
  }
  public rebuild(exercises: Array<Exercise>, passBy: 'ref' | 'value' = 'ref') {
    if (Array.isArray(exercises)) this._exercises = exercises.map((exercise) => new Exercise(exercise['_name'] || exercise['name'], exercise["_duration"] || exercise['duration'], exercise["_delay"] || exercise['delay']))
    this.eventEmitter.emit({ eventName: 'replace', element: exercises })
  }
  /**
   * 
   * @param number 
   */
  public hasExercises(number = 0) {
    return this.exercises.length > number
  }

  private loadStorageExercise() {
    const exercises: Array<Exercise> = this.browserStorage.load('exercises')
    if (exercises) {
      if (Array.isArray(exercises)) this.rebuild(exercises)
      this.eventEmitter.emit({ eventName: 'load', element: this._exercises })
    }
  }
  saveStorage() {
    this.browserStorage.save('exercises', this.exercises)
  }

}
