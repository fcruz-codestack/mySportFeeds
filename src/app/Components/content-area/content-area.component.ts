import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { IScoreboard, IGameSummary } from 'src/app/Models/IScoreboard';
import { MlbIconService } from 'src/app/Services/mlb-icon.service';
import { DatePickerService } from 'src/app/Services/date-picker.service';
import { Subscription } from 'rxjs';
import { MlbScoreboard, IGameInnings } from 'src/app/Models/mlb-scoreboard';
import { MlbDailySched } from 'src/app/Models/mlb-daily-sched';

@Component({
  selector: 'msf-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit, OnDestroy {
  gamesArray: IScoreboard[] = [];
  gameInnings: IGameInnings[] = [];
  scoreBoardArray: MlbScoreboard;
  dailySchedArray: MlbDailySched;
  private baseUrl = 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2019-regular/';
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
      this.loadData();
    });
    this.contentSubscriptions.add(dateSubscription);
    this.compareDates();
  }

  ngOnDestroy() {
    this.contentSubscriptions.unsubscribe();
  }

  loadData() {
    let url = '';
    switch (this.feedUrl) {
      case 'daily_game_schedule':
        url = this.baseUrl + this.dailyGameScheduleUrl + this.selectedDate;
        const dailySchedSubscription = this.dataService.getFeed(url)
          .subscribe(x => {
            // console.log('ngOnInit() SAYS: this is x -> ', x);
            // this.dailySchedArray = x;
            // console.log('ngOnInit() SAYS: DAILY SCHED -> ', this.dailySchedArray);
            for (const schedule of x.dailygameschedule.gameentry) {
              this.homeSrc = this.mlbIconService.getLogo(schedule.homeTeam.Abbreviation);
              this.awaySrc = this.mlbIconService.getLogo(schedule.awayTeam.Abbreviation);
              const nfo: IScoreboard = {
                id: schedule.id,
                date: schedule.date,
                time: schedule.time,
                lastUpdatedOn: x.dailygameschedule.lastUpdatedOn,
                scheduleStatus: schedule.scheduleStatus,
                delayedOrPostponedReason: schedule.delayedOrPostponedReason,
                originalDate: schedule.originalDate,
                originalTime: schedule.originalTime,
                homeTeamId: schedule.homeTeam.ID,
                homeTeamName: schedule.homeTeam.Name,
                homeTeamCity: schedule.homeTeam.City,
                homeTeamIcon: this.homeSrc,
                homeTeamAbbreviation: schedule.homeTeam.Abbreviation,
                awayTeamId: schedule.awayTeam.ID,
                awayTeamName: schedule.awayTeam.Name,
                awayTeamCity: schedule.homeTeam.City,
                awayTeamIcon: this.awaySrc,
                awayTeamAbbreviation: schedule.awayTeam.Abbreviation,
                location: schedule.location,
                awayScore: null,
                homeScore: null,
                isUnplayed: null,
                isInProgress: null,
                isCompleted: null,
                playStatus: null,
              };
              this.gamesArray.push(nfo);
            }
          });
        this.contentSubscriptions.add(dailySchedSubscription);
        break;
      case 'scoreboard':
        url = this.baseUrl + this.scoreboardUrl + this.selectedDate;
        const scoreBoardSubscription = this.dataService
          .getFeed(url)
          .subscribe(x => {
            // console.log('ngOnInit() SAYS: this is x -> ', x);
            // this.scoreBoardArray = x;
            // console.log('ngOnInit() SAYS: SCOREBOARD -> ', this.scoreBoardArray);
            /* for (const gameSummary of x.scoreboard.inningSummary.inning) {
              const summary: IGameSummary = {
                inning: gameSummary.'@number',
                awayTeam: summary.awayTeam,
                homeTeam: summary.homeTeam
              }
            } */
            for (let i = 0;  x.scoreboard.inningSummary.length < i; i++) {
              this.gameInnings[i] = {
                number: x.scoreboard.inningSummary.inning[i]['@number'],
                awayScore: x.scoreboard.inningSummary.inning[i].awayScore,
                homeScore: x.scoreboard.inningSummary.inning[i].homeScore,
              };
            }
            for (const gameScore of x.scoreboard.gameScore) {
              this.homeSrc = this.mlbIconService.getLogo(gameScore.game.homeTeam.Abbreviation);
              this.awaySrc = this.mlbIconService.getLogo(gameScore.game.awayTeam.Abbreviation);
              const nfo: IScoreboard = {
                id: gameScore.game.ID,
                date: gameScore.game.date,
                time: gameScore.game.time,
                lastUpdatedOn: x.scoreboard.lastUpdatedOn,
                scheduleStatus: gameScore.game.scheduleStatus,
                delayedOrPostponedReason: gameScore.game.delayedOrPostponedReason,
                originalDate: gameScore.game.originalDate,
                originalTime: gameScore.game.originalTime,
                homeTeamId: gameScore.game.homeTeam.ID,
                homeTeamName: gameScore.game.homeTeam.Name,
                homeTeamCity: gameScore.game.homeTeam.City,
                homeTeamIcon: this.homeSrc,
                homeTeamAbbreviation: gameScore.game.homeTeam.Abbreviation,
                awayTeamId: gameScore.game.awayTeam.ID,
                awayTeamName: gameScore.game.awayTeam.Name,
                awayTeamCity: gameScore.game.awayTeam.City,
                awayTeamIcon: this.awaySrc,
                awayTeamAbbreviation: gameScore.game.awayTeam.Abbreviation,
                location: gameScore.game.location,
                awayScore: gameScore.awayScore,
                homeScore: gameScore.homeScore,
                isUnplayed: gameScore.isUnplayed,
                isInProgress: gameScore.isInProgress,
                isCompleted: gameScore.isCompleted,
                playStatus: gameScore.playStatus,
              };
              this.gamesArray.push(nfo);
            }
          });
        this.contentSubscriptions.add(scoreBoardSubscription);
        break;
      default:
        break;
    }
    console.log('ngOnInit() SAYS: this is gamesArray -> ', this.gamesArray);
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
