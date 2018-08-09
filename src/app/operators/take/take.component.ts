import { Component, OnInit, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { take, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    let source = of(1,2,3,4,5);
    source.pipe(take(2)).subscribe(
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
