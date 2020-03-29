import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ExerciseInterface, Exercise } from 'src/app/services/exercises/exercises.models';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { MenuController } from '@ionic/angular';
import { EventsService } from 'src/app/services/events/events.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    public exercisesService:ExercisesService,
    public menu:MenuController,
    public eventsService:EventsService,
    public keyboard:Keyboard
  ) {
   }

  ngOnInit() {

  }

  async onPlay(){
    await this.menu.get('menu')
    await this.menu.close('menu')
    this.eventsService.menuEvent.emit('close')
  }
  getExerciseLength(){

  }
  printExerciseListSize(){
    return this.exercisesService.hasExercises() ? this.exercisesService.exercises.length + ' exercise(s)' : ''
  }
  onDeleteExercise(exercise:Exercise){
    console.log(exercise);
    
    this.exercisesService.remove(exercise)
  }
}

