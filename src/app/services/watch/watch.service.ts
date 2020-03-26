import { Injectable } from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Exercise } from '../pages/pages.models';
@Injectable({
  providedIn: 'root'
})
export class WatchService {
  timers:Set<Subscription> = new Set()
  private _timer = 0;
  public get timer() {
    return this._timer;
  }
  public set timer(value) {
    this._timer = value;
  }
  constructor() { }
  setTimer(seconds){
    this.timer = seconds
  }
  isRunning = false
  /**
   * Init countDown of timer
   * @param {number} delay 
   */
  initCountDown(delay:number = 0){
    if(this.timers.size == 0){
      let counter = timer(delay,1000).subscribe((timeEllapsed)=>{
        if(this.isRunning){
          if(this.timer > 0){
            this.timer--
          }else{
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
  initCountUp(delay:number = 0){
    if(this.timers.size == 0){
      let counter = timer(delay,1000).subscribe((timeEllapsed)=>{
        if(this.isRunning){
          if(this.timer > 0){
            this.timer++
          }else{
            this.timers.delete(counter)
            counter.unsubscribe()
          }
        }
      })
      this.timers.add(counter)
    }
    return this.timers
  }
  enableCounter(){
    console.log('Activating');
    this.isRunning = true
  }
  disableCounter(){
    console.log('Desabling');
    
    this.isRunning = false
  }
  initRoutine(exercises:Array<Exercise>){
    exercises.forEach((exercise)=>{
      
    })
  }
}
