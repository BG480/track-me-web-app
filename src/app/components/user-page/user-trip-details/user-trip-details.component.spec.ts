import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTripDetailsComponent } from './user-trip-details.component';

describe('UserTripDetailsComponent', () => {
  let component: UserTripDetailsComponent;
  let fixture: ComponentFixture<UserTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTripDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
