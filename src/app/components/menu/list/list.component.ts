import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PagesService } from 'src/app/services/pages/pages.service';
import { ExerciseInterface, Exercise } from 'src/app/services/pages/pages.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  exercisesForm: FormGroup;
  items: FormArray;
  constructor(
    private formBuilder: FormBuilder,
    public pagesServices:PagesService,
    
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
    if(event.which == 13){
      this.onAddExercise()
    }
  }
  onAddExercise(){
    if(this.exercisesForm.valid){
      let exercise:ExerciseInterface = new Exercise(this.exercisesForm.get('name').value,this.exercisesForm.get('duration').value,this.exercisesForm.get('delay').value)
      this.pagesServices.addExercise(exercise)
      console.log(this.exercisesForm);
    }
  }
  onDelete(exercise){
    this.pagesServices.removeExercise(exercise)
  }
}
