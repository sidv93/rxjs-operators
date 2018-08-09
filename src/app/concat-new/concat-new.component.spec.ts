import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatNewComponent } from './concat-new.component';

describe('ConcatNewComponent', () => {
  let component: ConcatNewComponent;
  let fixture: ComponentFixture<ConcatNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
