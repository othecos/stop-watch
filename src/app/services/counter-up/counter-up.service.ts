import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { timer, Subscription } from 'rxjs';
import { Utils } from 'src/app/classes/utils';

@Injectable({
  providedIn: 'root'
})
export class CounterUpService {
  public timer: number = new Date(Date.now()).setHours(0, 0, 0, 0);
  public isRunning = false;
  public isInitiated = false;
  public isFinished = false;
  private cyclePeriod = 80;
  private subs: Subscription;
  constructor() {
    this.timer = new Date(Date.now()).setHours(0, 0, 0, 0);
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
  }
  public resume() {
    this.isRunning = true;
  }
  public stop() {
    this.resetTimer();
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
      const startTime = new Date(Date.now()).setHours(0, 0, 0, 0);
      let timeLapsed = 0;
      this.subs = timer(0, this.cyclePeriod).subscribe(() => {
        if (this.isRunning) {
          timeLapsed += this.cyclePeriod;
          this.timer = startTime + timeLapsed;
        }
        if (this.isFinished) {
          this.subs.unsubscribe();
        }
      });
    }
  }
  private updateTimer() {

  }
  private resetTimer() {
    this.timer = new Date(Date.now()).setHours(0, 0, 0, 0);
  }
}
