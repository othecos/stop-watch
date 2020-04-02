import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClockerService } from 'src/app/services/clocker/clocker.service';
import { Exercise } from 'src/app/services/exercises/exercises.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  //Events
  @Output('onDelete') onDeleteEvent: EventEmitter<Exercise> = new EventEmitter()
  @Output('onEdit') onEditEvent: EventEmitter<Exercise> = new EventEmitter()

  //Data
  @Input('isReordering') isReordering:boolean
  @Input('exercise') exercise:Exercise
  @Input('index') index:number

  constructor(
    public clockerService: ClockerService,

  ) { }

  ngOnInit() { }
  onEditExercise(exercise:Exercise) {
    if (!this.clockerService.intervalTimer.isRunning) {
      this.onEditEvent.emit(exercise)
    }
  }
  onDeleteExercise(exercise: Exercise) {
    if (!this.clockerService.intervalTimer.isRunning) {
      this.onDeleteEvent.emit(exercise)
    }
  }
}
