import { Component, OnInit } from '@angular/core';
import { interval } from '../../../../node_modules/rxjs';
import { withLatestFrom, map } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-withlatestfrom',
  templateUrl: './withlatestfrom.component.html',
  styleUrls: ['./withlatestfrom.component.css']
})
export class WithlatestfromComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = interval(5000);
    let provided = interval(1000);
    source.pipe(
      withLatestFrom(provided),
      map(([val1, val2]) => 'First= ' + val1 + ' Second-' + val2)
    ).subscribe(
      val => {
        let p = document.createElement('p');
        let text = document.createTextNode(val);
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

}
