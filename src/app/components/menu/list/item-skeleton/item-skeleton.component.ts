import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-skeleton',
  templateUrl: './item-skeleton.component.html',
  styleUrls: ['./item-skeleton.component.scss'],
})
export class MenuItemSkeletonComponent implements OnInit {

  @Input() isReordering
  constructor() { }
  
  ngOnInit() {}
  
  

}
