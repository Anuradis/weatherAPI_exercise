import { Component, OnInit } from '@angular/core'
import { WeatherService } from './weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'weatherAPI'
  locationsArr: Array<string> = ['New York', '10005', 'Tokyo', 'São Paulo', 'Pluto', 'Zielona Gora']

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.logLocations();
  }

  logLocations(): void {
    for (const location of this.locationsArr) {
      this.weatherService.getWeather(location).subscribe({
        next: data => {
          console.log(`=============== locationName/postcode: ${location} ===============`)
          console.log(`Name: ${data.location.name}`)
          console.log(`Temperature: ${data.current.temperature}`)
          console.log(`Description: ${data.current.weather_descriptions[0]}`);
          console.log(`Time: ${data.location.localtime}`)
          console.log(``)
        }
      })
    }
  }
}
