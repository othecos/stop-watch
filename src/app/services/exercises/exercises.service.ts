import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Exercise } from './exercises.models';
import { StorageService } from '../storage/storage.service';
import { IonicUtilsService } from '../utils/ionic-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  public eventEmitter: EventEmitter<{ eventName: 'add' | 'remove' | 'replace' | 'clear' | 'load', element: Array<Exercise> }> = new EventEmitter()

  private _exercises: Array<Exercise> = [];

  public get exercises(): Array<Exercise> {
    return this._exercises;
  }
  onExerciseChanged: EventEmitter<Array<Exercise>> = new EventEmitter()
  constructor(private browserStorage:StorageService,private utils:IonicUtilsService) { 
    this.eventEmitter.subscribe((event)=>{
      if(event.eventName != 'load') this.browserStorage.save('exercises',this.exercises)
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
   * @emits onExerciseChanged { eventName: 'add', element: [exercise] }
   */
  public add(exercise: Exercise, emitEvent: boolean = true) {
    if (exercise) {
      this.exercises.push(exercise)
      this.onExerciseChanged.emit(this.exercises)
      this.utils.presentToast(`Added <b>${exercise.name}</b> exercise`,1000,'top', 'success')
    }
    if (emitEvent) this.eventEmitter.emit({ eventName: 'add', element: [exercise] })
  }
  public async remove(exercise: Exercise) {
    if (exercise) {
      let findIndex = this.exercises.findIndex((ex) =>ex.id == exercise.id)
      if (findIndex != -1) {
        await this.exercises.splice(findIndex, 1);

        this.utils.presentToast(`Removed <b>${exercise.name}</b> exercise`,1000,'bottom', 'danger')
        this.onExerciseChanged.emit(this.exercises);
        this.eventEmitter.emit({ eventName: 'remove', element: [exercise] })
      }
    }

  }
  public clear() {
    this._exercises = []
    this.eventEmitter.emit({ eventName: 'clear', element: [] })
    this.utils.presentToast(`Clear exercise list`,1000)
  }
  public replace(exercises: Array<Exercise>, passBy: 'ref' | 'value' = 'ref') {
    if (Array.isArray(exercises)) this._exercises = [...exercises]
    this.eventEmitter.emit({ eventName: 'replace', element: exercises })

  }
  /**
   * 
   * @param number 
   */
  public hasExercises(number = 0) {
    return this.exercises.length > number
  }

  private loadStorageExercise(){
    const exercises:Array<Exercise> =  this.browserStorage.load('exercises')
    console.log(exercises);
    if(exercises){
      if (Array.isArray(exercises)) this._exercises = [...exercises];
      this.eventEmitter.emit({eventName: 'load', element: this._exercises})
    }
  }

}