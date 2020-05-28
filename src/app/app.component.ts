import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherAPI';

  city;
  time;
  weather;
  locationsArr: Array<string> = ['New York', '10005', 'Tokyo', 'São Paulo', 'Pluto'];

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather('São Paulo').subscribe({
      next: data => {
        console.log(data);
        console.log('Name:', data.location.name);
        console.log('Temperature:', data.current.temperature );
        console.log('Time:', data.current.observation_time);
      }
    });
  }

    ngOnInit() {

    }
}
