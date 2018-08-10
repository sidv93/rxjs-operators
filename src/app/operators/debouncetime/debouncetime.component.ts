import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit {

  @ViewChild('inputText') inputText: ElementRef;
  public debounceResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    let input = fromEvent(this.inputText.nativeElement, 'keyup').pipe(map(e => e['target'].value));
    this.debounceResult = input.pipe(debounceTime(3000));
  }

}
