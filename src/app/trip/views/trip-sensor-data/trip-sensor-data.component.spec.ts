import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSensorDataComponent } from './trip-sensor-data.component';

describe('TripSensorDataComponent', () => {
  let component: TripSensorDataComponent;
  let fixture: ComponentFixture<TripSensorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripSensorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSensorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
