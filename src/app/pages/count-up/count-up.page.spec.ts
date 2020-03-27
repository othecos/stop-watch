import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountUpPage } from './count-up.page';

describe('CountUpPage', () => {
  let component: CountUpPage;
  let fixture: ComponentFixture<CountUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
