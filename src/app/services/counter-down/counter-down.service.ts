import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Utils } from 'src/app/classes/utils';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CounterDownService {

  public timer: number = new Date(Date.now()).setHours(0, 0, 0, 0)
  public isRunning: boolean = false
  public isInitiated: boolean = false
  public isFinished: boolean = false
  private cyclePeriod: number = 25
  private subs: Subscription

   hours: number = 0
   min: number = 45
   sec: number = 0
   ms: number = 0
  constructor(
    private storage:StorageService

  ) {
    this.loadVariables()
  }
  public setTimer(hours: number = 0, min: number = 0, sec: number = 0, ms: number= 0) {
    this.hours = hours
    this.min = min
    this.sec = sec
    this.ms = ms
    this.timer = new Date(Date.now()).setHours(hours, min, sec, ms)
    this.saveVariables()
  }
  public start() {
    if (this.isInitiated) {
      this.resume()
    } else {
      this.isInitiated = true;
      this.isRunning = true
      this.isFinished = false
      this.initCounter()
    }
  }
  public pause() {
    this.isRunning = false
    console.log(this.timer);

  }
  public resume() {
    this.isRunning = true;
  }
  public stop() {
    this.setTimer(this.hours,this.min,this.sec,this.ms)
    this.isRunning = false
    this.isInitiated = false;
    this.isFinished = true;
    console.count('Stoped')
  }
  public async restart() {
    this.stop()
    await Utils.sleep(this.cyclePeriod * 3)
    this.start()
  }
  public initCounter() {
    if (!this.subs || this.subs.closed) {
      let startTime = new Date(Date.now()).setHours(this.hours, this.min, this.sec, this.ms)
      let timeLapsed = 0
      this.subs = timer(0, this.cyclePeriod).subscribe(() => {
        if (this.isRunning) {
          if (this.timer > 0) {
            timeLapsed += this.cyclePeriod
            this.timer = startTime - timeLapsed;
          }
          else {
            this.stop()
          }
        }
        if (this.isFinished) {
          this.subs.unsubscribe()
          console.count("Closed")
        }
      })
    }
  }
  private saveVariables() {
    this.storage.save('hours',this.hours)
    this.storage.save('min',this.min)
    this.storage.save('sec',this.sec)
    this.storage.save('ms',this.ms)
  }
  private loadVariables() {
    this.hours = this.storage.load('hours')
    this.min = this.storage.load('min')
    this.sec = this.storage.load('sec',)
    this.ms = this.storage.load('ms')
    this.timer = new Date(Date.now()).setHours(this.hours, this.min, this.sec, this.ms)
  }
  
 
}
