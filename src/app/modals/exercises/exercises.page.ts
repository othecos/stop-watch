import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { EventsService } from 'src/app/services/events/events.service';
import { ExerciseInterface, Exercise } from 'src/app/services/exercises/exercises.models';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {
  exercisesForm: FormGroup;
  constructor(
    public exercisesService:ExercisesService,
    public menu:MenuController,
    public eventsService:EventsService,
    public modalController: ModalController,
    public utils:IonicUtilsService
  ) {
    this.exercisesForm = new FormGroup({
      name:   new FormControl('Pull Ups!',null),
      duration: new FormControl(60,[Validators.min(1)]),
      delay: new FormControl(10,Validators.min(1)),
      // sets: new FormControl(5,Validators.min(0))
    });
   }

  ngOnInit() {}

  onInput(){
      this.onAddExercise()
  }
  onAddExercise(){
    if(this.exercisesForm.valid){
      let exercise:Exercise = new Exercise(this.exercisesForm.get('name').value,this.exercisesForm.get('duration').value,this.exercisesForm.get('delay').value)
      this.exercisesService.add(exercise)
    }else{
      this.utils.presentToast('Invalid values, duration and delay should be higher than 0',3000,'middle','danger')
    }
  }
  onDelete(exercise){
    this.exercisesService.remove(exercise)
  }
  async onPlay(){
    await this.menu.get('menu')
    await this.menu.close('menu')
    this.eventsService.menuEvent.emit('close')
  }
  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

