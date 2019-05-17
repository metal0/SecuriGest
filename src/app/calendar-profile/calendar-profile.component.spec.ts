import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarProfileComponent } from './calendar-profile.component';

describe('CalendarProfileComponent', () => {
  let component: CalendarProfileComponent;
  let fixture: ComponentFixture<CalendarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
