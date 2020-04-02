import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio:Map<string,HTMLAudioElement> = new Map()
  constructor(

  ) {
    this.audio.set('beep',new Audio("assets/sounds/beep.mp3"))
    this.audio.set('resume',new Audio("assets/sounds/resume.mp3"))
    this.audio.set('pause',new Audio("assets/sounds/pause.mp3"))
    this.audio.set('finish',new Audio("assets/sounds/finish-exercise.mp3"))
    this.audio.set('next',new Audio("assets/sounds/next.mp3"))
    this.audio.set('success',new Audio("assets/sounds/the_next_episode.mp3"))
    this.audio.set('half-way',new Audio("assets/sounds/beep_twice.mp3"))
  }
  play(name) {
    console.log(this.audio,name);
    
    let aud = this.audio.get(name)
    if(aud){
      aud.load()
      aud.play()
    }
   
  }
  stop(name){
    let audio = this.audio.get(name)
    if(audio){
      audio.pause()
    }
  
  }
  stopAll(){

  }
  // start2(){
  //   let audio = new Audio();
  //   audio.src = "assets/sounds/star-wars.mp3";
  //   audio.load();
  //   audio.play();
  // }


}
