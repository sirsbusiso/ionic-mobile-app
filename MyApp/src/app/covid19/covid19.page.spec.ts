import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Covid19Page } from './covid19.page';

describe('Covid19Page', () => {
  let component: Covid19Page;
  let fixture: ComponentFixture<Covid19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Covid19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
