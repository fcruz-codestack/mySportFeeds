export class MlbDailySched {
  dailygameschedule: {
    lastUpdatedOn: string,
    gameentry: [
      {
        id: string,
        scheduleStatus: string,
        originalDate: string,
        originalTime: string,
        delayedOrPostponedReason: string,
        date: string,
        time: string,
        awayTeam: {
          ID: string,
          City: string,
          Name: string,
          Abbreviation: string
        },
        homeTeam: {
          ID: string,
          City: string,
          Name: string,
          Abbreviation: string
        },
        location: string
      }
    ]
  };
}
