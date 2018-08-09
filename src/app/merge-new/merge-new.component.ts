import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, merge } from '../../../node_modules/rxjs';
import { mapTo, startWith, scan } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-merge-new',
  templateUrl: './merge-new.component.html',
  styleUrls: ['./merge-new.component.css']
})
export class MergeNewComponent implements OnInit {

  @ViewChild('button1') button1: ElementRef;
  @ViewChild('button2') button2: ElementRef;
  public mergeResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    let b1 = fromEvent(this.button1.nativeElement, 'click').pipe(mapTo(1), startWith(0), scan((acc, item) => acc + item));
    let b2 = fromEvent(this.button2.nativeElement, 'click').pipe(mapTo(1), startWith(0), scan((acc, item) => acc + item));

    this.mergeResult = merge(b1,b2);
  }
}
