import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public selected = 0;
  public title= "Rxjs operators";
  public constructor() {
  }

  public ngOnInit() {
  }
}
