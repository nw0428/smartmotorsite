import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartmotorComponent } from './smartmotor.component';

describe('SmartmotorComponent', () => {
  let component: SmartmotorComponent;
  let fixture: ComponentFixture<SmartmotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartmotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartmotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
