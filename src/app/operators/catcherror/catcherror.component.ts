import { Component, OnInit, OnDestroy } from '@angular/core';
import { throwError, of } from '../../../../node_modules/rxjs';
import { catchError,tap } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-catcherror',
  templateUrl: './catcherror.component.html',
  styleUrls: ['./catcherror.component.css']
})
export class CatcherrorComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    let source = throwError('Im an error');
    source.pipe(catchError(val => of('I caught ' + val))).subscribe(
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
