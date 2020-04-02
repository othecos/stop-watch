import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { Exercise } from 'src/app/services/exercises/exercises.models';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss'],
})
export class ItemUpdateComponent implements OnInit {

  //Events
  @Output('onFinish') onFinishEvent: EventEmitter<{name:string,duration:number,delay:number}> = new EventEmitter()
  @Output('onCancel') onCancelEvent: EventEmitter<void> = new EventEmitter()


  //Data
  private _exercise: Exercise;


  @Input('exercise')
  public set exercise(value: Exercise) {
    this._exercise = value ;
    this.setFormData()
  }
  public get exercise(): Exercise {
    return this._exercise;
  }
 

  exercisesForm: FormGroup;
  constructor(
    private utils:IonicUtilsService
  ) {
    this.exercisesForm = new FormGroup({
      name: new FormControl('Pull Ups!', null),
      duration: new FormControl(60, [Validators.min(1)]),
      delay: new FormControl(10, Validators.min(1)),
    });
  }
  
  ngOnInit() {

   }

  onFinishEdition() {
    if (this.exercisesForm.valid && this.exercise) {
      this.exercise.name = this.exercisesForm.value.name
      this.exercise.delay = this.exercisesForm.value.delay
      this.exercise.duration = this.exercisesForm.value.duration
      this.onFinishEvent.emit(this.exercise)
    }else{
      this.utils.presentToast('Invalid values, duration and delay should be higher than 0',3000,'top','danger')
    }
  }
  onCancelEdition() {
    this.onCancelEvent.emit()
  }
  setFormData():void{
    if(this.exercise){
      this.exercisesForm.get('name').setValue(this.exercise.name)
      this.exercisesForm.get('duration').setValue(this.exercise.duration)
      this.exercisesForm.get('delay').setValue(this.exercise.delay)
    }
  }
}
