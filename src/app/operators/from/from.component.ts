import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = from([1,2,3,4,5]);
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
