import { Component, OnInit } from '@angular/core';
import { Observable, of, concat } from 'rxjs';

@Component({
  selector: 'app-concat-new',
  templateUrl: './concat-new.component.html',
  styleUrls: ['./concat-new.component.css']
})
export class ConcatNewComponent implements OnInit {

  public concatResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    let source1 = of(1,2,3);
    let source2 = of(4,5,6);
    concat(source1, source2).subscribe(
      (value) => {
        let p = document.createElement('p');
        let text = document.createTextNode(value.toString());
        p.appendChild(text);
        document.body.appendChild(p);
      }
    );
  }

}
