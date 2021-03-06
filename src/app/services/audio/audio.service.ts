import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { audioAccess, AccessMethods, AudiosAvailable } from './audio.data';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio: Map<string, HTMLAudioElement> = new Map();
  isMuted = false;
  volume = 0.5;

  constructor(
    public platform: Platform
  ) {
    this.audio.set('beep', new Audio('assets/sounds/beep.mp3'));
    this.audio.set('resume', new Audio('assets/sounds/resume.mp3'));
    this.audio.set('pause', new Audio('assets/sounds/pause.mp3'));
    this.audio.set('finish', new Audio('assets/sounds/finish-exercise.mp3'));
    this.audio.set('next', new Audio('assets/sounds/next.mp3'));
    this.audio.set('success', new Audio('assets/sounds/the_next_episode.mp3'));
    this.audio.set('half-way', new Audio('assets/sounds/beep-2.mp3'));
    this.audio.set('clap', new Audio('assets/sounds/clapping.mp3'));
    this.audio.set('fireworks', new Audio('assets/sounds/fireworks.mp3'));

  }
  public initExerciseSounds() {
    // let audio = new Audio("assets/sounds/beep.mp3")
    // audio.load()
    // audio.muted = true;
    // audio.loop = true
    // audio.play()
  }

  public play(name: AudiosAvailable, volume = this.volume) {
    if (volume > 1) { throw new Error('Volume should be between [ 0, 1 ]'); }

    const aud = this.audio.get(name);
    if (aud) {
      aud.load();
      aud.volume = volume;
      aud.play();
    }
  }
  public stop(name) {
    const audio = this.audio.get(name);
    if (audio) {
      audio.pause();
    }

  }
  public stopAll() {
    for (const audio of this.audio) {
      audio[1].pause();
    }
  }
  public mute() {
    for (const audio of this.audio) {
      audio[1].muted = true;
    }
    this.isMuted = true;
  }

  public unMute() {
    for (const audio of this.audio) {
      audio[1].muted = false;
    }
    this.isMuted = false;
  }
  /**
   *
   * @param volume Should be between 0 and 1
   * @throws {{code, message}} It will throw error if it's on a unsupported platform or the volume is out of range
   */
  public setVolume(volume: number) {

    if (this.platform.is('mobile')) { throw { code: 'platform', message: 'Ios volume cannot be controlled'}; }

    if (volume > 1) { throw { code: 'params', message: 'Volume should be between [ 0, 1 ]'}; }

    for (const iterator of this.audio) {
      iterator[1].volume = volume;
    }
    this.volume = volume;
  }
  public getPlatformAccess() {
    return this.platform.platforms().map((plat) => {
      const result =  audioAccess.find((access) => access.platform === plat);
      return result;
    }).filter((value) => value);
  }
  public isMethodAllowed(method: AccessMethods) {
   return this.getPlatformAccess().some((element) => {
    return element.access.some((acc) => acc === method);
   });
  }

}
