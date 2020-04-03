import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { audioAccess, AccessMethods, AudiosAvailable } from './audio.data';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio:Map<string,HTMLAudioElement> = new Map()
  isMuted: boolean = false
  volume: number = 0.5
  
  constructor(
    public platform: Platform
  ) {
    this.audio.set('exercise-sounds',new Audio("assets/sounds/beep.mp3"))
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
  public initExerciseSounds(){
    let audio = this.audio.get('exercise-sounds')
    audio.load()
    audio.muted = true;
    audio.loop = true
    audio.play()
  }
  public finishExerciseSounds(){
    let audio = this.audio.get('exercise-sounds')
    audio.pause()
  }
  
  public play(name:AudiosAvailable, volume = this.volume) {
    if(volume > 1) throw 'Volume should be between [ 0, 1 ]';

    let aud = this.audio.get(name)
    if(aud){
      aud.load()
      aud.volume = volume
      aud.play()
    }
  }
  public stop(name){
    let audio = this.audio.get(name)
    if(audio){
      audio.pause()
    }
  
  }
  public stopAll(){
    for (const audio of this.audio) {
      audio[1].pause()
    }
  }
  public mute(){
    for (const audio of this.audio) {
      audio[1].muted = true
    }
    this.isMuted = true
  }
  
  public unMute(){
    for (const audio of this.audio) {
      audio[1].muted = false
    }
    this.isMuted = false
  }
  /**
   * 
   * @param {number} volume Should be between 0 and 1 
   * @throws {{code, message}} It will throw error if it's on a unsupported platform or the volume is out of range
   */
  public setVolume(volume:number){

    if(this.platform.is('mobile')) throw { code: 'platform', message: 'Ios volume cannot be controlled'}

    if(volume > 1) throw { code: 'params',message:'Volume should be between [ 0, 1 ]'}

    for (const iterator of this.audio) {
      iterator[1].volume = volume
    }
    this.volume = volume
  }
  public getPlatformAccess(){
    return this.platform.platforms().map((plat)=>{
      let result =  audioAccess.find((access)=>{ return access.platform == plat})
      return result 
    }).filter((value)=> value)
  }
  public isMethodAllowed(method: AccessMethods){
   return this.getPlatformAccess().some((element)=>{
    return element.access.some((acc)=> acc == method)
   })
  }

}
