import { Component } from '@angular/core';
import { CounterDownService } from 'src/app/services/counter-down/counter-down.service';
import { ModalController } from '@ionic/angular';
import { TimerPage } from 'src/app/modals/timer/timer.page';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.page.html',
  styleUrls: ['./count-down.page.scss'],
})
export class CountDownPage {

  constructor(
    public counter:CounterDownService,
    private modalController:ModalController
  ) { 
  }
  async onSetTime(){
    await this.presentModal()
  }
  onPlay(){
    this.counter.start()
  }
  onPause(){
    this.counter.pause()
  }
  onStop(){
    this.counter.stop()
  }
  onRestart(){
    this.counter.restart()
  }
  private async presentModal() {
    const modal = await this.modalController.create({
      component: TimerPage,
      swipeToClose: true
    });
    modal.onDidDismiss().then((response)=>{
      
    })
    return await modal.present();
  }

}
