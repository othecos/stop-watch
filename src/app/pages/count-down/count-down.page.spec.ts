import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountDownPage } from './count-down.page';

describe('CountDownPage', () => {
  let component: CountDownPage;
  let fixture: ComponentFixture<CountDownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountDownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
