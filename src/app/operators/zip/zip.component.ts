import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';
import { delay } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    zip(
      of("Hello"),
      of("World").pipe(delay(1000)),
      of("How are you").pipe(delay(2000)),
      of("I am fine").pipe(delay(3000))
    ).subscribe(
      val => {
        let p = document.createElement('p');
        let text = document.createTextNode(val.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

}
