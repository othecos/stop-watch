import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../services/watch/watch.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  timer
  constructor(private activatedRoute: ActivatedRoute,private watchService:WatchService) {
    this.initTimer()
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  initTimer(){
    this.timer = this.watchService.timer
  }
}
