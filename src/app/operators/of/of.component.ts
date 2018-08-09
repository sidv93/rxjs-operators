import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = of(1,"Hello", 2, "World");
    source.subscribe(value => {
      let p = document.createElement('p');
      let text = document.createTextNode(value.toString());
      p.appendChild(text);
      document.body.appendChild(p);
    })
  }

  ngOnDestroy() {
    let p = document.body.getElementsByTagName('p');
    for ( let i = 0; i < p.length; i++) {
      p[i].remove();
    }
  }

}
