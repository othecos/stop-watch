import { Component, OnInit, ViewChild } from '@angular/core';
import { AudioService } from 'src/app/services/audio/audio.service';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss'],
})
export class VolumeComponent implements OnInit {
  volume: number
  isVolumeAllowed: boolean = false
  isMuted: boolean
  constructor(
    public audioService:AudioService,
    public platform:Platform
  ) {
    this.isMuted = this.audioService.isMuted
    this.volume =  this.audioService.volume * 100
   }

  ngOnInit() {
   this.isVolumeAllowed = this.audioService.isMethodAllowed('volume')
  }
  ngAfterViewInit(){
      this.volume= (this.audioService.volume * 100)
  }
  onChangeVolume($event){
    let volume = (parseFloat($event.target.value) / 100)
    if(volume <= 1 && volume >= 0){
      try{
        this.audioService.setVolume(volume)
      }
      catch(err){
        if(err.code == 'platform'){
          this.isVolumeAllowed = false
        }
      }
    }
  }
  onToggleMuted(event){
    console.log(event,event.target.checked);
    
    if(event.target.checked){
      this.audioService.unMute()
    }else{
      this.audioService.mute()

    }
  }
}
