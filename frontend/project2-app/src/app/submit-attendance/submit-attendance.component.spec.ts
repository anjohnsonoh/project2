import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAttendanceComponent } from './submit-attendance.component';

describe('SubmitAttendanceComponent', () => {
  let component: SubmitAttendanceComponent;
  let fixture: ComponentFixture<SubmitAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
