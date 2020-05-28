import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherAPI';


  locationsArr: Array<string> = ['New York', '10005', 'Tokyo', 'São Paulo', 'Pluto'];
  constructor() { }

  get Locations
}
