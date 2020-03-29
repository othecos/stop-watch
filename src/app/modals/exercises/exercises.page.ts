import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { EventsService } from 'src/app/services/events/events.service';
import { ExerciseInterface, Exercise } from 'src/app/services/exercises/exercises.models';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {
  exercisesForm: FormGroup;
  items: FormArray;
  constructor(
    public exercisesService:ExercisesService,
    public menu:MenuController,
    public eventsService:EventsService,
    public modalController: ModalController
  ) {
    this.exercisesForm = new FormGroup({
      name:   new FormControl('Pull Ups!',null),
      duration: new FormControl(60,[Validators.min(0)]),
      delay: new FormControl(10,Validators.min(0))
    });
    console.log(this.exercisesForm.controls);
    
   }

  ngOnInit() {}

  onInput(event:KeyboardEvent){
    // if(event.which == 13){
      this.onAddExercise()
    // }
  }
  onAddExercise(){
    if(this.exercisesForm.valid){
      let exercise:ExerciseInterface = new Exercise(this.exercisesForm.get('name').value,this.exercisesForm.get('duration').value,this.exercisesForm.get('delay').value)
      this.exercisesService.add(exercise)
      console.log(this.exercisesForm);
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

