import { Injectable, EventEmitter } from '@angular/core';
import { Exercise } from './exercises.models';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private _exercises: Array<Exercise> = [];
  
  public get exercises(): Array<Exercise> {
    return this._exercises;
  }
  onExerciseChanged:EventEmitter<Array<Exercise>> = new EventEmitter()
  constructor() { }

  public addMany(exercises:Array<Exercise>){
    if(Array.isArray(exercises)&& exercises.length > 0){
      exercises.forEach(element => {
        this.exercises.push(element)
      });
    }
  }
  public add(exercise:Exercise){
    if(exercise){
      this.exercises.push(exercise)
      this.onExerciseChanged.emit(this.exercises)
    }
  }
  public remove(exercise:Exercise){
    if(exercise){
      let findIndex = this.exercises.findIndex((ex)=> ex.id == exercise.id)
      if(findIndex != -1) this.exercises.splice(findIndex,1);  this.onExerciseChanged.emit(this.exercises);
    }
  }
  public clear(){
    this._exercises = []
  }
  public replace(exercises:Array<Exercise>,passBy: 'ref' | 'value' = 'ref' ){
    if(Array.isArray(exercises)) this._exercises = [...exercises]
  }
  public hasExercises(){
    return this.exercises.length > 0
  }
}
