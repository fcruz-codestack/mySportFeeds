export interface IScoreboard {
  id: number;
  date: string;
  time: string;
  lastUpdatedOn: string;
  scheduleStatus: string;
  delayedOrPostponedReason: string;
  originalDate: string;
  originalTime: string;
  homeTeamId: number;
  homeTeamName: string;
  homeTeamCity: string;
  homeTeamIcon: string;
  homeTeamAbbreviation: string;
  awayTeamId: number;
  awayTeamName: string;
  awayTeamCity: string;
  awayTeamIcon: string;
  awayTeamAbbreviation: string;
  location: string;
  awayScore: number;
  homeScore: number;
  isUnplayed: boolean;
  isInProgress: boolean;
  isCompleted: boolean;
  playStatus: string;
  /* gameSummary: IGameSummary; */
}

export interface IGameSummary {
  inningSummary: {
    inning: number;
    awayScore: number;
    homeScore: number;
  };
}
