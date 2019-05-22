export class MlbScoreboard {
  'scoreboard': {
    lastUpdatedOn: string;
    gameScore: [
      {
        game: {
          ID: number;
          scheduleStatus: string;
          originalDate: string;
          originalTime: string;
          delayedOrPostponedReason: string;
          date: string;
          time: string;
          awayTeam: {
            ID: number;
            City: string;
            Name: string;
            Abbreviation: string;
          };
          homeTeam: {
            ID: number;
            City: string;
            Name: string;
            Abbreviation: string;
          };
          location: string;
        };
        isUnplayed: boolean;
        isInProgress: boolean;
        isCompleted: boolean;
        playStatus: string;
        awayScore: number;
        homeScore: number;
        inningSummary: {
          inning: [
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            },
            {
              '@number': number;
              awayScore: number;
              homeScore: number;
            }
          ];
        };
      }
    ];
  };
}
