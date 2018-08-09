import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from '../../../node_modules/rxjs';
import { map, throttleTime } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.css']
})
export class ThrottleComponent implements OnInit {

  @ViewChild('inputText') inputText: ElementRef;
  public throttleResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    // let source = fromEvent(this.inputText.nativeElement, 'keyup').pipe(map(e => e.target.value);
    // this.throttleResult = source.pipe(throttleTime(3000));
    console.log('value- ' + this.isApproachingRange(10, 3));
  }
  private isApproachingRange(endRange, currentNumber) {
    return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
  }

}
