import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntervalPage } from './interval.page';

describe('IntervalPage', () => {
  let component: IntervalPage;
  let fixture: ComponentFixture<IntervalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntervalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
