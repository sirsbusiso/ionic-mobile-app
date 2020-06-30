import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPeoplePage } from './all-people.page';

describe('AllPeoplePage', () => {
  let component: AllPeoplePage;
  let fixture: ComponentFixture<AllPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPeoplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
