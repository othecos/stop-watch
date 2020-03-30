import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio:Map<string,HTMLAudioElement> = new Map()
  constructor() {
    this.audio.set('delay',new Audio("assets/sounds/star-wars.mp3"))
    this.audio.set('count-down',new Audio("assets/sounds/count-down.mp3"))
    this.audio.set('exercise',new Audio("assets/sounds/star-wars.mp3"))
  }
  play(name) {
    let aud = this.audio.get(name)
    aud.load()
    aud.play()
  }
  stop(name){
    let aud = this.audio.get(name)
    aud.pause()
  }
  // start2(){
  //   let audio = new Audio();
  //   audio.src = "assets/sounds/star-wars.mp3";
  //   audio.load();
  //   audio.play();
  // }


}
