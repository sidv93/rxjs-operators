import { Component, OnInit } from '@angular/core';
import { timer, of } from '../../../../node_modules/rxjs';
import { concatMap,delay } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source1 = timer(3000);
    source1.pipe(concatMap(val => of('Hello ' + val).pipe(delay(3000)))).subscribe(
      val => {
        let p = document.createElement('p');
        let text = document.createTextNode(val.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

}
