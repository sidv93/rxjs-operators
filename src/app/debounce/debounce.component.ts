import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {

  @ViewChild('inputText') inputText: ElementRef;
  public debounceResult: Observable<any>;
  constructor() { }

  ngOnInit() {
    let input = fromEvent(this.inputText.nativeElement, 'keyup').pipe(map(e => e.target.value));
    this.debounceResult = input.pipe(debounceTime(3000));
  }

}
