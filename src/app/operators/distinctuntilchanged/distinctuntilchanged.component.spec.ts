import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctuntilchangedComponent } from './distinctuntilchanged.component';

describe('DistinctuntilchangedComponent', () => {
  let component: DistinctuntilchangedComponent;
  let fixture: ComponentFixture<DistinctuntilchangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctuntilchangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctuntilchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
