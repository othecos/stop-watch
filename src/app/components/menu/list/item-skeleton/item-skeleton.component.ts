import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-skeleton',
  templateUrl: './item-skeleton.component.html',
  styleUrls: ['./item-skeleton.component.scss'],
})
export class ItemSkeletonComponent implements OnInit {

  @Input() isReordering
  constructor() { }
  
  ngOnInit() {}
  
  

}
