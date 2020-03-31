import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { timer, Subscription } from 'rxjs';
import { Utils } from 'src/app/classes/utils';

@Injectable({
  providedIn: 'root'
})
export class CounterUpService {
  public timer: number = new Date(Date.now()).setHours(0,0,0,0)
  public isRunning:boolean = false
  public isInitiated:boolean = false
  public isFinished:boolean = false
  private cyclePeriod:number = 25
  private subs:Subscription
  constructor() { 
    this.timer = new Date(Date.now()).setHours(0,0,0,0)
  }

  public start(){
    if(this.isInitiated){
      this.resume()
    }else{
      this.isInitiated = true;
      this.isRunning = true
      this.isFinished = false
      this.initCounter()
    }
  }
  public pause(){
    this.isRunning = false
    console.log(this.timer);
    
  }
  public resume(){
    this.isRunning = true;
  }
  public stop(){
    this.resetTimer()
    this.isRunning = false
    this.isInitiated = false;
    this.isFinished = true;
    console.count('Stoped')
  }
  public async restart(){
    this.stop()
    await Utils.sleep(this.cyclePeriod * 3)
    this.start()
  }
  public initCounter(){
    if(!this.subs || this.subs.closed){
      let startTime = new Date(Date.now()).setHours(0,0,0,0)
      let timeLapsed = 0
      this.subs = timer(0, this.cyclePeriod).subscribe(()=>{
        if(this.isRunning){
          timeLapsed += this.cyclePeriod
          this.timer = startTime + timeLapsed;
        }
        if(this.isFinished){
          this.subs.unsubscribe()
          console.count("Closed")
        }
      })
    }
  }
  private updateTimer(){

  }
  private resetTimer(){
    this.timer = new Date(Date.now()).setHours(0,0,0,0)
  }
}
