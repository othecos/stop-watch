import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchService {
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
}
