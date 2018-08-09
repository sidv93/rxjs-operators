import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';
 
@Component({
  selector: 'app-start-with-new',
  templateUrl: './start-with-new.component.html',
  styleUrls: ['./start-with-new.component.css']
})
export class StartWithNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source = of(1,2,3);
    let startsWith = source.pipe(startWith(0));
    startsWith.subscribe(
      value => {
        let p = document.createElement('p');
        let text = document.createTextNode(value.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

}
