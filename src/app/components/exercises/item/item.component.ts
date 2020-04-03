import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseListItem } from 'src/app/services/exercises/exercises.models';

@Component({
  selector: 'app-exercises-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ExerciseItemComponent implements OnInit {

  @Output('onSelectedItem') selectedItemEvent:EventEmitter<ExerciseListItem> = new EventEmitter()

  @Input('item') item:ExerciseListItem
  constructor() { }

  ngOnInit() {}
  
  onSelectedItem(item){
    this.selectedItemEvent.emit(item)
  }
}
