import { Injectable } from '@angular/core';
import { Exercise, Pages } from './pages.models';




@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public appPages = [
    new Pages('Interval Training','/folder/interval','alarm'),
    new Pages('Count-down Training','/folder/count-down','chevron-down-circle'),
    new Pages('Count-Up Training','/folder/count-up','chevron-up-circle'),
    new Pages('Donate: )','/donate','happy'),
  ];
  public exercises:Array<Exercise> = []
  constructor() { 
    
  }
  addExercise(exercise:Exercise){
    if(exercise){
      this.exercises.push(exercise)
    }
  }
  removeExercise(exercise:Exercise){
    if(exercise){
      let findIndex = this.exercises.findIndex((ex)=> ex.id == exercise.id)
      if(findIndex != -1) this.exercises.splice(findIndex,1);  console.log('Removed');
    }
  }
  
}
