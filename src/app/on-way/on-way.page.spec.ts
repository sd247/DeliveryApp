import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnWayPage } from './on-way.page';

describe('OnWayPage', () => {
  let component: OnWayPage;
  let fixture: ComponentFixture<OnWayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnWayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnWayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
