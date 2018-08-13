import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { throttleTime, map } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttleTime.component.html',
  styleUrls: ['./throttleTime.component.css']
})
export class ThrottleComponent implements OnInit {

  @ViewChild('text') textInput: ElementRef;
  public throttleResult$: Observable<any>;

  constructor() { }

  ngOnInit() {
    let source = fromEvent(this.textInput.nativeElement, 'keyup');
    this.throttleResult$ = source.pipe(
      throttleTime(3000), map(e => e['target'].value)
    )
  }

}
