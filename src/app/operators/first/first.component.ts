import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo, startWith, first } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @ViewChild('button1') button1 : ElementRef;
  public firstResult: Observable<any>;

  constructor() { }

  ngOnInit() {
    let b1 = fromEvent(this.button1.nativeElement, 'click').pipe(mapTo(1));
    this.firstResult = b1.pipe(first());
  }

}
