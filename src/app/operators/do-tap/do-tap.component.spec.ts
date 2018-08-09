import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoTapComponent } from './do-tap.component';

describe('DoTapComponent', () => {
  let component: DoTapComponent;
  let fixture: ComponentFixture<DoTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
