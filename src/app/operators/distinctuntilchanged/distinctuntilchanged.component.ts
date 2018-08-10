import { Component, OnInit, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { distinctUntilChanged } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-distinctuntilchanged',
  templateUrl: './distinctuntilchanged.component.html',
  styleUrls: ['./distinctuntilchanged.component.css']
})
export class DistinctuntilchangedComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    let source = of(1,1,2,3,4,4,4,4,5,6,6,7);
    source.pipe(distinctUntilChanged()).subscribe(
      val => {
        let p = document.createElement('p');
        let text = document.createTextNode(val.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

  ngOnDestroy() {
    let p = document.getElementsByTagName("p");
    for(let i=0;i<p.length;i++) {
      p[i].remove();
    }
  }

}
