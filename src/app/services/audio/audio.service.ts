import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio:Map<string,HTMLAudioElement> = new Map()
  isMuted: boolean = false
  volume: number = 0.05
  constructor(

  ) {
    this.audio.set('beep',new Audio("assets/sounds/beep.mp3"))
    this.audio.set('resume',new Audio("assets/sounds/resume.mp3"))
    this.audio.set('pause',new Audio("assets/sounds/pause.mp3"))
    this.audio.set('finish',new Audio("assets/sounds/finish-exercise.mp3"))
    this.audio.set('next',new Audio("assets/sounds/next.mp3"))
    this.audio.set('success',new Audio("assets/sounds/the_next_episode.mp3"))
    this.audio.set('half-way',new Audio("assets/sounds/beep_twice.mp3"))
    this.audio.set('clap',new Audio("assets/sounds/clapping.mp3"))
    this.audio.set('fireworks',new Audio("assets/sounds/fireworks.mp3"))
  }
  play(name, volume = this.volume) {
    if(volume > 1) throw 'Volume should be between [ 0, 1 ]';

    let aud = this.audio.get(name)
    if(aud){
      aud.load()
      aud.volume = volume
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
  mute(){
    for (const iterator of this.audio) {
      iterator[1].muted = true
    }
    this.isMuted = true
  }
  
  unMute(){
    for (const iterator of this.audio) {
      iterator[1].muted = false
    }
    this.isMuted = false
  }
  setVolume(volume){
    if(volume > 1) throw 'Volume should be between [ 0, 1 ]';

    for (const iterator of this.audio) {
      iterator[1].volume = volume
    }
    this.volume = volume
  }
  // makeCallAgain(aud){
  //   t
  // }  // start2(){
  //   let audio = new Audio();
  //   audio.src = "assets/sounds/star-wars.mp3";
  //   audio.load();
  //   audio.play();
  // }


}
