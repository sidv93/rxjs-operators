import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { take, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-take-new',
  templateUrl: './take-new.component.html',
  styleUrls: ['./take-new.component.css']
})
export class TakeNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = of(1,2,3,4,5);
    source.pipe(take(2)).subscribe(
      value => {
        let p = document.createElement('p');
        let text = document.createTextNode(value.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

}
