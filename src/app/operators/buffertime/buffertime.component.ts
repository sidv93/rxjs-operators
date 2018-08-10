import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from '../../../../node_modules/rxjs';
import { bufferTime } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-buffertime',
  templateUrl: './buffertime.component.html',
  styleUrls: ['./buffertime.component.css']
})
export class BuffertimeComponent implements OnInit, OnDestroy {

  private subs;
  constructor() { }

  ngOnInit() {
    let source = interval(1000);
    this.subs = source.pipe(bufferTime(5000)).subscribe(
      val => {
        let p = document.createElement('p');
        let text = document.createTextNode(JSON.stringify(val));
        p.appendChild(text);
        document.body.appendChild(p);
      }
    )
  }

  ngOnDestroy() {
    let p = document.getElementsByTagName("p");
    for (let i=0;i<p.length;i++) {
      p[i].remove();
    }
    this.subs.unsubscribe();
  }

}
