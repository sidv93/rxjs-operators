import { Component, OnInit, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    let source = of(1,2,3,4,5,6,7,8,9,10);
    source.pipe(filter(item => item%2 === 0)).subscribe(
      data => {
        let p = document.createElement('p');
        let text = document.createTextNode(data.toString());
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
