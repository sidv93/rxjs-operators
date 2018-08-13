import { Component, OnInit } from '@angular/core';
import { forkJoin, of, interval } from '../../../../node_modules/rxjs';
import { delay, take } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    forkJoin(of("Hello"),of("World").pipe(delay(1000)), interval(1000).pipe(take(1)), interval(1000).pipe(take(2))
  ).subscribe(
    val => {
      let p = document.createElement('p');
      let text = document.createTextNode(val.toString());
      p.appendChild(text);
      document.body.appendChild(p);
    }
  )
  }

}
