import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, combineLatest, timer, pipe, fromEvent, of, interval, merge, throwError, from } from 'rxjs';
import { map, mapTo, startWith, scan, delay, concat, withLatestFrom, catchError, debounceTime, throttleTime, distinctUntilChanged, filter, first, take, tap, takeUntil, share, bufferTime } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('input') formValue;
  @ViewChild('b1') b1;
  @ViewChild('b2') b2;

  public button1;
  public formInput$: Observable<any>;

  //timerOne emits first value at 1s, then once every 4s
  public timerOne = interval(1000);
  //timerTwo emits first value at 2s, then once every 4s
  public timerTwo = timer(1000);
  //timerThree emits first value at 3s, then once every 4s
  public timerThree = timer(2000);

  public constructor() {

  }

  public ngAfterViewInit() {
    // this.formInput$ = fromEvent(this.formValue.nativeElement, 'keyup').pipe(map(
    //   e => {
    //     console.log('e=' + e.target.value);
    //     return e.target.value;
    //   }
    // ))
    // let button1 = fromEvent(this.b1.nativeElement, 'click').pipe(mapTo(1), startWith(0), scan((acc, curr) => acc + curr));
    // let button2 = fromEvent(this.b2.nativeElement, 'click').pipe(mapTo(1), startWith(0), scan((acc, curr) => acc + curr));
    // let combined = combineLatest(button1, button2).pipe(
    //   map(([val1, val2]) => val1 + val2))
    //   .subscribe(
    //     (total) => 
    //     console.log('total=' + total));

    // let subscribe = combined.subscribe(
    //   ([one, two, three]) => {
    //     console.log(
    //       `Timer One Latest: ${one},
    //      Timer Two Latest: ${two},
    //      Timer Three Latest: ${three}`
    //     );
    //   }
    // )

    // let source1 = of(1,2,3);
    // let source2 = of(4,5,6);
    // let example = source2.pipe(concat(source1)).subscribe(
    //   item => {
    //     console.log('item-' + JSON.stringify(item));
    //   }
    // ) 


    // let example = merge(this.timerOne.pipe(mapTo('First')), this.timerTwo.pipe(mapTo('Second')),this.timerThree.pipe(mapTo('Third')))
    //   .subscribe(val => console.log('vslue=' + val));

    // let example = this.timerOne.pipe(
    //   withLatestFrom(this.timerTwo),
    //   map(([val1, val2]) => {
    //     return `First Source (5s): ${val1} Second Source (1s): ${val2}`;
    //   }
    // )).subscribe(val => console.log(val));

    // let source = throwError('Im an error');
    // let example = source.pipe(catchError(
    //   (val) => of('Gotcha ' + val)
    // ))
    // let subscribe = example.subscribe(val => console.log(val));

    // this.formInput$ = fromEvent(this.formValue.nativeElement, 'keyup').pipe(debounceTime(3000), map(e => e.target.value));

    // let arr = from([1,2,2,3,3,6,7,7,7]);
    // this.formInput$ = arr.pipe(distinctUntilChanged());

    // const source = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
    // this.formInput$ = source.pipe(filter(val => val.age > 30),first(), map(item => item.name));

    // let clickEvent = fromEvent(document,'click').pipe(
    //   take(1),
    //   tap(v => {
    //     document.getElementById('locationDisplay').innerHTML = 'Your first click was at ' + v.screenX + ',' + v.screenY;
    //   }
    // )).subscribe();

    // this.timerOne.pipe(takeUntil(this.timerTwo)).subscribe(val => console.log(val));

    // let example = this.timerTwo.pipe(tap(() => console.log('Side effect'), mapTo('Result')), share());
    // let subscribe = example.subscribe(val => console.log(val));
    // let subTwo = example.subscribe(val => console.log(val));

    // let source = of(1,2,3,4,5);
    // let example = source.pipe(tap(val => console.log('before map ' + val)), map(val => val+10), tap(val => console.log('after map ' + val))).subscribe();

    // this.timerOne.pipe(bufferTime(4000)).subscribe(val => console.log(val));

  }
}
