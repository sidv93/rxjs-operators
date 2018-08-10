import { Component, OnInit } from '@angular/core';
import { of, timer } from 'rxjs';
import { tap, mapTo, share } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let source = of("Result");
    // let example = source.pipe(
    //   tap(val => {
    //     let p = document.createElement('p');
    //     let text = document.createTextNode('Side effect');
    //     p.appendChild(text);
    //     document.body.appendChild(p);
    //     return val;
    //   }),
    //   mapTo('RESULT')
    // );

    // let shared = example.pipe(share());

    // let sub1 = shared.subscribe(val => {
    //   let p = document.createElement('p');
    //     let text = document.createTextNode(val.toString());
    //     p.appendChild(text);
    //     document.body.appendChild(p);
    // });
    // let sub2 = shared.subscribe(val => {
    //   let p = document.createElement('p');
    //     let text = document.createTextNode(val.toString());
    //     p.appendChild(text);
    //     document.body.appendChild(p);
    // })
    //emit value in 1s
    const source = timer(1000);
    //log side effect, emit result
    const example = source.pipe(
      tap(() => console.log('***SIDE EFFECT***')),
      mapTo('***RESULT***')
    );
    const sharedExample = example.pipe(share());
    /*
      ***SHARED, SIDE EFFECT EXECUTED ONCE***
      output:
      "***SIDE EFFECT***"
      "***RESULT***"
      "***RESULT***"
    */
    const subscribeThree = sharedExample.subscribe(val => console.log(val));
    const subscribeFour = sharedExample.subscribe(val => console.log(val));
  }

}
