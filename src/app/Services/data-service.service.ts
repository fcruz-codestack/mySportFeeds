import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MlbScoreboard } from '../Models/mlb-scoreboard';
import { MlbDailySched } from '../Models/mlb-daily-sched';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private baseUrl = 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2019-regular/';

  constructor(private http: HttpClient) {
  }
  getScoreBoard(feedUrl: string): Observable<MlbScoreboard> {
    const url = this.baseUrl + feedUrl;
    return this.http.get<MlbScoreboard>(url, {
      headers: {
        authorization:
          'Basic ZWZmNDU4YTQtN2M0Ni00NGY5LTgwYjUtY2QzY2U2OkN1aXRsYWh1YWMyOA=='
      }
    });
  }
  getDailyGameSchedule(feedUrl: string): Observable<MlbDailySched> {
    const url = this.baseUrl + feedUrl;
    return this.http.get<MlbDailySched>(url, {
      headers: {
        authorization:
          'Basic ZWZmNDU4YTQtN2M0Ni00NGY5LTgwYjUtY2QzY2U2OkN1aXRsYWh1YWMyOA=='
      }
    });
  }
}
