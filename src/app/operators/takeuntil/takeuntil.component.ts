import { Component, OnInit } from '@angular/core';
import { interval } from '../../../../node_modules/rxjs';
import { takeUntil, filter, scan, withLatestFrom, map, first } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-takeuntil',
  templateUrl: './takeuntil.component.html',
  styleUrls: ['./takeuntil.component.css']
})
export class TakeuntilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = interval(1000);
    let evenNos = source.pipe(filter(val => val % 2 === 0 ));
    let evenCount = evenNos.pipe(scan((acc, item)=> acc + 1, 0));
    let fiveCheck = evenCount.pipe(filter(val => val > 5));

    let example = evenNos.pipe(
      withLatestFrom(evenCount),
      map(([first, second]) => 'Number: ' + first + ' Count: ' + second),
      takeUntil(fiveCheck)
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
