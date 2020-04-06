import { Component, OnInit, ViewChild } from '@angular/core';
import { Exercise } from 'src/app/services/exercises/exercises.models';
import { ActivatedRoute } from '@angular/router';
import { ClockerService } from 'src/app/services/clocker/clocker.service';
import { PagesService } from 'src/app/services/pages/pages.service';
import { MenuController, IonSlides } from '@ionic/angular';
import { CounterUpService } from 'src/app/services/counter-up/counter-up.service';

@Component({
  selector: 'app-count-up',
  templateUrl: './count-up.page.html',
  styleUrls: ['./count-up.page.scss'],
})
export class CountUpPage implements OnInit {

  public title: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    public counter: CounterUpService
    ) {
   }
  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((response) => {
      this.title = response.get('id');
    });

  }
  onPlay() {
    this.counter.start();
  }
  onPause() {
    this.counter.pause();
  }
  onStop() {
    this.counter.stop();
  }
  onRestart() {
    this.counter.restart();
  }

}
