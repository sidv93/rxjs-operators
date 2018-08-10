import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from '../../../../node_modules/rxjs';
import { mapTo, startWith, scan } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  @ViewChild('button1') button1: ElementRef;
  public scanResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    let b = fromEvent(this.button1.nativeElement, 'click');
    this.scanResult = b.pipe(mapTo(1), startWith(0), scan((acc, item) => acc + item ));
  }

}
