import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, interval } from '../../../../node_modules/rxjs';
import { switchMap } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  @ViewChild('button') button: ElementRef;
  constructor() { }

  ngOnInit() {
    let source = fromEvent(this.button.nativeElement, 'click');
    source.pipe(switchMap(val => interval(500))).subscribe(
      val => {
        let p = document.createElement('p');
        let text = document.createTextNode(val.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

}
