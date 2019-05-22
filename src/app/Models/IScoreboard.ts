export interface IScoreboard {
  date: string;
  time: string;
  lastUpdatedOn: string;
  scheduleStatus: string;
  originalDate: string;
  originalTime: string;
  homeTeamName: string;
  homeTeamIcon: string;
  homeTeamAbbreviation: string;
  awayTeamCity: string;
  awayTeamName: string;
  awayTeamIcon: string;
  awayTeamAbbreviation: string;
  location: string;
  awayScore: number;
  homeScore: number;
}
