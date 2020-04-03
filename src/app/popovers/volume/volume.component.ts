import { Component, OnInit, ViewChild } from '@angular/core';
import { AudioService } from 'src/app/services/audio/audio.service';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss'],
})
export class VolumeComponent implements OnInit {
  volume: number = this.audioService.volume * 100
  constructor(
    public audioService:AudioService
  ) {
   }

  ngOnInit() {
  
  }
  ngAfterViewInit(){
      this.volume= (this.audioService.volume * 100)
  }
  onChangeVolume($event){
    let volume = (parseFloat($event.target.value) / 100)
    if(volume <= 1 && volume >= 0){
      this.audioService.setVolume(volume)
    }
  }
}
