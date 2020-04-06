import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ExerciseListItem } from 'src/app/services/exercises/exercises.models';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  @Output() selectedEvent: EventEmitter<ExerciseListItem> = new EventEmitter();
  @Input() list: Array<ExerciseListItem>;
  constructor(

  ) { }

  ngOnInit() {}
  onSelectedExercise(exercise) {
    this.selectedEvent.emit(exercise);
  }
}
