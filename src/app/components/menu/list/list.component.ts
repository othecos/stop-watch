import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ExerciseInterface, Exercise } from 'src/app/services/exercises/exercises.models';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { MenuController, IonReorderGroup } from '@ionic/angular';
import { EventsService } from 'src/app/services/events/events.service';
import { ClockerService } from 'src/app/services/clocker/clocker.service';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class MenuListComponent implements OnInit {
  //Component Variables 
  @ViewChild (IonReorderGroup,{static:false}) reorderGroup: IonReorderGroup;
  
  //Class Variable
  isReordering:boolean = false
  constructor(
    public exercisesService:ExercisesService,
    public menu:MenuController,
    public eventsService:EventsService,
    public clockerService:ClockerService,
    public utils:IonicUtilsService
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
    if(!this.clockerService.intervalTimer.isRunning){
      this.exercisesService.remove(exercise)
    }
  }
  onToggleReorder(){
    this.isReordering = !this.isReordering
  }
  disabledReorder(){
    return !this.exercisesService.hasExercises(1)
  }
  onReorder(ev: any){
    if(ev.detail){
      ev.detail.complete(this.exercisesService.exercises);
    }
  }
  public async onClearExerciseList() {
    await this.utils.presentAlertConfirm('Clear', 'Clear exercise list?', async () => {
      await this.clockerService.stopAll()
      this.exercisesService.clear()
    })
  }
  onUpdateExercise(exercise){
    if(!this.clockerService.intervalTimer.isRunning){
      this.setEditionMode(exercise,false)
      this.exercisesService.update(exercise)
    }
    
  }
  onEnableEditionMode(exercise){
    this.setEditionMode(exercise,true)
  }
  onDisableEditionMode(exercise){
    this.setEditionMode(exercise,false)
  }
  setEditionMode(exercise,value:boolean){
    if(exercise){
      exercise.controller.isEditing = value
    }
  }
}

