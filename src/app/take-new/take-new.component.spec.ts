import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeNewComponent } from './take-new.component';

describe('TakeNewComponent', () => {
  let component: TakeNewComponent;
  let fixture: ComponentFixture<TakeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
