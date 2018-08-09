import { Component, OnInit, OnDestroy } from '@angular/core';
import { last } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    let source = of(1,2,3);
    source.pipe(last()).subscribe(
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
