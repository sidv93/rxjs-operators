import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, fromEvent, pipe, combineLatest } from 'rxjs';
import { map, mapTo, startWith, scan } from 'rxjs/operators';


@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.css']
})
export class CombinelatestComponent implements OnInit {

  @ViewChild('button1') button1: ElementRef;
  @ViewChild('button2') button2: ElementRef;

  public combineLatestResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    let b1 = fromEvent(this.button1.nativeElement, 'click').pipe(mapTo(1), startWith(0), scan((acc, item) => acc + item));
    let b2 = fromEvent(this.button2.nativeElement, 'click').pipe(mapTo(1), startWith(0), scan((acc, item) => acc + item));

    this.combineLatestResult = combineLatest(b1,b2).pipe(map(([val1, val2]) => val1 + val2));
  }
}
