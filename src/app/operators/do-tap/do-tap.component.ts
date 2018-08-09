import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-do-tap',
  templateUrl: './do-tap.component.html',
  styleUrls: ['./do-tap.component.css']
})
export class DoTapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = of("Hello");
    source.pipe(
      tap(val => {
        let p = document.createElement('p');
        let text = document.createTextNode('Value before map=' + val.toString());
        p.appendChild(text);
        document.body.appendChild(p);
        return val;
      }),
      map(val => val.toUpperCase()),
      tap(val => {
        let p = document.createElement('p');
        let text = document.createTextNode('Value after map=' + val.toString());
        p.appendChild(text);
        document.body.appendChild(p);
        return val;
      })
    ).subscribe();
  }

  ngOnDestroy() {
    let p = document.body.getElementsByTagName('p');
    for ( let i = 0; i < p.length; i++) {
      p[i].remove();
    }
  }
}
