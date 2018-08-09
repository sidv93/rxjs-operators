import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeNewComponent } from './merge-new.component';

describe('MergeNewComponent', () => {
  let component: MergeNewComponent;
  let fixture: ComponentFixture<MergeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
