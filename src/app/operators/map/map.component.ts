import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = of("Hello", "World");
    source.pipe(map(item => item.toUpperCase())).subscribe(
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
    for ( let i = 0; i < p.length; i++) {
      p[i].remove();
    }
  }
}
