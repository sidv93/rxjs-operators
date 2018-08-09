import { Component, OnInit, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-startwith',
  templateUrl: './startwith.component.html',
  styleUrls: ['./startwith.component.css']
})
export class StartwithComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    let source = of(1, 2, 3);
    let startsWith = source.pipe(startWith(0));
    startsWith.subscribe(
      value => {
        let p = document.createElement('p');
        let text = document.createTextNode(value.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

  ngOnDestroy() {
    let p = document.body.getElementsByTagName('p');
    console.log('ele=' + p.length);
    for ( let i = 0; i < p.length; i++) {
      p[i].remove();
    }
    
  }
}
