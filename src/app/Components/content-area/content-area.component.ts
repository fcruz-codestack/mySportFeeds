import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { IScoreboard } from 'src/app/Models/IScoreboard';
import { MlbIconService } from 'src/app/Services/mlb-icon.service';
import { DatePickerService } from 'src/app/Services/date-picker.service';
import { Subscription } from 'rxjs';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
import { MlbScoreboard } from 'src/app/Models/mlb-scoreboard';
import { MlbDailySched } from 'src/app/Models/mlb-daily-sched';

@Component({
  selector: 'msf-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit, OnDestroy {
  gamesArray: IScoreboard[] = [];
  scoreBoardArray: MlbScoreboard;
  dailySchedArray: MlbDailySched;
  private scoreboardUrl = 'scoreboard.json?fordate=';
  private dailyGameScheduleUrl = 'daily_game_schedule.json?fordate=';
  homeSrc: string;
  awaySrc: string;
  selectedDate: string;
  feedUrl: string;
  nfo: any = {};
  dailyGameScheduleInfo: any = {};

  contentSubscriptions: Subscription = new Subscription();
  constructor(
    private dataService: DataServiceService,
    private mlbIconService: MlbIconService,
    private dateService: DatePickerService
  ) {}

  ngOnInit() {
    this.gamesArray = [];
    const dateSubscription = this.dateService.dateValue.subscribe(date => {
      this.selectedDate = date;
      console.log(
        'Content-Area ngOnInit() SAYS selectedDate is ->',
        this.selectedDate
      );
      this.gamesArray = [];
      this.compareDates();
      this.httpRequest();
    });
    this.contentSubscriptions.add(dateSubscription);
    this.compareDates();
  }

  ngOnDestroy() {
    this.contentSubscriptions.unsubscribe();
  }

  httpRequest() {
    let url = '';
    switch (this.feedUrl) {
      case 'daily_game_schedule':
        url = this.dailyGameScheduleUrl + this.selectedDate;
        const dailySchedSubscription = this.dataService.getDailyGameSchedule(url).subscribe(x => {
          console.log('ngOnInit() SAYS: this is x -> ', x);
          this.dailySchedArray = x;
          console.log('ngOnInit() SAYS: DAILY SCHED -> ', this.dailySchedArray);
        });
        this.contentSubscriptions.add(dailySchedSubscription);
        break;
      case 'scoreboard':
        url = this.scoreboardUrl + this.selectedDate;
        const scoreBoardSubscription = this.dataService.getScoreBoard(url).subscribe(x => {
          console.log('ngOnInit() SAYS: this is x -> ', x);
          this.scoreBoardArray = x;
          console.log('ngOnInit() SAYS: SCOREBOARD -> ', this.scoreBoardArray);
        });
        this.contentSubscriptions.add(scoreBoardSubscription);
        break;
      default:
        break;
    }
    

    /* const dataSubscription = this.dataService
      .getUrl(url, this.selectedDate)
      .subscribe(x => {
        console.log('ngOnInit() SAYS: this x->', x);
        for (const gameScore of x.scoreboard.gameScore) {
          this.homeSrc = this.mlbIconService.getLogo(gameScore.game.homeTeam.Abbreviation);
          this.awaySrc = this.mlbIconService.getLogo(gameScore.game.awayTeam.Abbreviation);
          const nfo: IScoreboard = {
            date: gameScore.game.date,
            time: gameScore.game.time,
            lastUpdatedOn: x.scoreboard.lastUpdatedOn,
            scheduleStatus: gameScore.game.scheduleStatus,
            originalDate: gameScore.game.originalDate,
            originalTime: gameScore.game.originalDate,
            homeTeamName: gameScore.game.homeTeam.Name,
            homeTeamIcon: this.homeSrc,
            homeTeamAbbreviation: gameScore.game.homeTeam.Abbreviation,
            awayTeamCity: gameScore.game.awayTeam.City,
            awayTeamName: gameScore.game.awayTeam.Name,
            awayTeamIcon: this.awaySrc,
            awayTeamAbbreviation: gameScore.game.awayTeam.Abbreviation,
            location: gameScore.game.location,
            awayScore: gameScore.awayScore,
            homeScore: gameScore.homeScore
          };
          this.gamesArray.push(nfo);
        }
      }); */
  }
  compareDates() {
    // tslint:disable-next-line: radix
    const selDay = parseInt(this.selectedDate.substr(6, 2));
    // tslint:disable-next-line: radix
    const selMonth = parseInt(this.selectedDate.substr(4, 2)) - 1;
    // tslint:disable-next-line: radix
    const selYear = parseInt(this.selectedDate.substr(0, 4));
    const selDate = new Date(selYear, selMonth, selDay);
    const todaysDate = new Date();
    console.log('compareDatesFormat() Says selDate is -> ' + selDate);
    console.log('compareDatesFormat() Says todaysDate is -> ' + todaysDate);
    const diff = Math.abs(selDate.getTime() - todaysDate.getTime()) / 3600000;
    console.log('The Diff IS ' + diff + ' HOURS');
    if (diff <= 24) {
      // console.log('The winner is -> daily_game_schedule = ');
      this.feedUrl = 'daily_game_schedule';
    } else {
      // console.log('The winner is -> scoreboard');
      this.feedUrl = 'scoreboard';
    }
  }
}
