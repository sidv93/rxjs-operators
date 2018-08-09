import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, concat } from 'rxjs';


@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit, OnDestroy {

  public concatResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    let source1 = of(1, 2, 3);
    let source2 = of(4, 5, 6);
    concat(source1, source2).subscribe(
      (value) => {
        let p = document.createElement('p');
        let text = document.createTextNode(value.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    );
  }

  ngOnDestroy() {
    let p = document.body.getElementsByTagName('p');
    for ( let i = 0; i < p.length; i++) {
      p[i].remove();
    }
  }
}
