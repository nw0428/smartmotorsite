import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartmotorListComponent } from './smartmotor-list.component';

describe('SmartmotorListComponent', () => {
  let component: SmartmotorListComponent;
  let fixture: ComponentFixture<SmartmotorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartmotorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartmotorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
