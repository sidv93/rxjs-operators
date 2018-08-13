import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = of("Hello");
    source.pipe(mergeMap(val => of(val + ' World'))).subscribe(
      val => {
        let p = document.createElement('p');
        let text = document.createTextNode(val);
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

}
