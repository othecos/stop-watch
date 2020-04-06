import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Utils } from 'src/app/classes/utils';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CounterDownService {

  public timer: number = new Date(Date.now()).setHours(0, 0, 0, 0);
  public isRunning = false;
  public isInitiated = false;
  public isFinished = false;
  private cyclePeriod = 80;
  private subs: Subscription;

  hours = 0;
  min = 0;
  sec = 0;
  ms = 0;
  startTime: number;
  constructor(
    private storage: StorageService

  ) {
    this.loadVariables();
  }
  public setTimer(hours: number = 0, min: number = 0, sec: number = 0, ms: number = 0) {
    this.hours = hours;
    this.min = min;
    this.sec = sec;
    this.ms = ms;
    this.timer = new Date(Date.now()).setHours(hours, min, sec, ms);
    this.startTime = new Date(Date.now()).setHours(hours, min, sec, ms);
    this.saveVariables();
  }
  public start() {
    if (this.isInitiated) {
      this.resume();
    } else {
      this.isInitiated = true;
      this.isRunning = true;
      this.isFinished = false;
      this.initCounter();
    }
  }
  public pause() {
    this.isRunning = false;
    this.startTime = new Date(Date.now()).setHours(this.hours, this.min, this.sec, this.ms);
  }
  public resume() {
    this.isRunning = true;
  }
  public stop() {
    this.setTimer(this.hours, this.min, this.sec, this.ms);
    this.isRunning = false;
    this.isInitiated = false;
    this.isFinished = true;
  }
  public async restart() {
    this.stop();
    await Utils.sleep(this.cyclePeriod * 3);
    this.start();
  }
  public initCounter() {
    if (!this.subs || this.subs.closed) {
      this.startTime = new Date(Date.now()).setHours(this.hours, this.min, this.sec, this.ms);
      let timeLapsed = 0;
      this.subs = timer(0, this.cyclePeriod).subscribe(() => {
        if (this.isRunning) {
          if (this.timerEnd()) {
            this.stop();
          } else {
            timeLapsed += this.cyclePeriod;
            this.timer = this.startTime - timeLapsed;
          }
        }
        if (this.isFinished) {
          this.subs.unsubscribe();
        }
      });
    }
  }
  private saveVariables() {
    this.storage.save('hours', this.hours);
    this.storage.save('min', this.min);
    this.storage.save('sec', this.sec);
    this.storage.save('ms', this.ms);
  }
  private loadVariables() {
    this.hours = this.storage.load('hours');
    this.min = this.storage.load('min');
    this.sec = this.storage.load('sec');
    this.ms = this.storage.load('ms');
    this.timer = new Date(Date.now()).setHours(this.hours, this.min, this.sec, this.ms);
  }
  timerEnd() {
    return new Date(this.timer).getMilliseconds() - this.cyclePeriod <= 0 &&
      new Date(this.timer).getSeconds() === 0 &&
      new Date(this.timer).getMinutes() === 0 &&
      new Date(this.timer).getHours() === 0;
  }

}
