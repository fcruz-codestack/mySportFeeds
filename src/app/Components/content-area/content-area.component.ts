import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'msf-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

  urlDailySchedule = 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2019-regular/daily_game_schedule.json?fordate=20190513';
  urlScoreBoard = 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2019-regular/scoreboard.json?fordate=20190512';
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    /* this.weatherService.getWeatherData(this.apiURL).subscribe(x => {
      this.weatherData = x;
      console.log('ngOnInit() SAYS: weatherData ->', this.weatherData);
    });
    public get(route: string): Observable<any> {
      return this.http.get<any>(this.apiUrl + route, { headers: {'authorization': 'Basic sdlkjfiohe'}});
    } */
    this.dataService.getUrl(this.urlDailySchedule).subscribe( x => {
      console.log('ngOnInit() SAYS: this x->', x);
    });
  }

}
