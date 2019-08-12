import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserHomeComponent } from './basic-user-home.component';

describe('BasicUserHomeComponent', () => {
  let component: BasicUserHomeComponent;
  let fixture: ComponentFixture<BasicUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
