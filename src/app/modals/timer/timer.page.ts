import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ExerciseInterface, Exercise } from 'src/app/services/exercises/exercises.models';
import { CounterDownService } from 'src/app/services/counter-down/counter-down.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  timerForm: FormGroup;
  constructor(
    public modalController: ModalController,
    public counter:CounterDownService,
  ) {
    this.timerForm = new FormGroup({
      hours:   new FormControl(this.counter.hours,[Validators.min(0),Validators.max(24)]),
      min: new FormControl(this.counter.min,[Validators.min(0),Validators.max(60)]),
      sec: new FormControl(this.counter.sec,[Validators.min(0),Validators.max(60)]),
      ms: new FormControl(this.counter.ms,[Validators.min(0),Validators.max(1000)])
    });
    console.log(this.timerForm.controls);
    
   }

  ngOnInit() {}

  onSubmit(event:KeyboardEvent){
    if(this.timerForm.valid){
      this.onDismiss()
    }
  }
  onDismiss() {
    this.counter.setTimer(this.timerForm.value.hours,this.timerForm.value.min,this.timerForm.value.sec,this.timerForm.value.ms)
    console.log(this.counter);
    this.modalController.dismiss();
  }


}
