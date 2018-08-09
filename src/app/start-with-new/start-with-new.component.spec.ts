import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithNewComponent } from './start-with-new.component';

describe('StartWithNewComponent', () => {
  let component: StartWithNewComponent;
  let fixture: ComponentFixture<StartWithNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartWithNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWithNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
