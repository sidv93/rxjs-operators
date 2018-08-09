import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleComponent } from './throttleTime.component';

describe('ThrottleComponent', () => {
  let component: ThrottleComponent;
  let fixture: ComponentFixture<ThrottleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
