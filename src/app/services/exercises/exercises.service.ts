import { Injectable, EventEmitter } from '@angular/core';
import { Exercise } from './exercises.models';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  public eventEmitter:EventEmitter<'add' | 'remove' | 'replace' | 'clear'> = new EventEmitter()

  private _exercises: Array<Exercise> = [];
  
  public get exercises(): Array<Exercise> {
    return this._exercises;
  }
  onExerciseChanged:EventEmitter<Array<Exercise>> = new EventEmitter()
  constructor() { }

  public async addMany(exercises:Array<Exercise>){
    if(Array.isArray(exercises)&& exercises.length > 0){
      await exercises.forEach(async element => {
        this.add(element,false)
      });
    }
    this.eventEmitter.emit('add')
  }
  public add(exercise:Exercise,emitEvent:boolean = true){
    if(exercise){
      this.exercises.push(exercise)
      this.onExerciseChanged.emit(this.exercises)
    }
    if(emitEvent)this.eventEmitter.emit('add')
  }
  public async remove(exercise:Exercise){
    if(exercise){
      let findIndex = await this.exercises.findIndex(async (ex)=> ex.id == exercise.id)
      if(findIndex != -1) await this.exercises.splice(findIndex,1);  this.onExerciseChanged.emit(this.exercises);
    }
    this.eventEmitter.emit('remove')

  }
  public clear(){
    this._exercises = []
    this.eventEmitter.emit('clear')
  }
  public replace(exercises:Array<Exercise>,passBy: 'ref' | 'value' = 'ref' ){
    if(Array.isArray(exercises)) this._exercises = [...exercises]
    this.eventEmitter.emit('replace')

  }
  public hasExercises(){
    return this.exercises.length > 0
  }

}
