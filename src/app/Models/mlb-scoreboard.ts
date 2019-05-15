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
            ID: string;
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
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50679';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '1:05PM';
          awayTeam: {
            ID: '123';
            City: 'Seattle';
            Name: 'Mariners';
            Abbreviation: 'SEA';
          };
          homeTeam: {
            ID: '113';
            City: 'Boston';
            Name: 'Red Sox';
            Abbreviation: 'BOS';
          };
          location: 'Fenway Park';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '2';
        homeScore: '11';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '1';
              homeScore: '3';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '1';
              homeScore: '2';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '3';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '2';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50678';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '1:07PM';
          awayTeam: {
            ID: '119';
            City: 'Chicago';
            Name: 'White Sox';
            Abbreviation: 'CWS';
          };
          homeTeam: {
            ID: '112';
            City: 'Toronto';
            Name: 'Blue Jays';
            Abbreviation: 'TOR';
          };
          location: 'Rogers Centre';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '5';
        homeScore: '1';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '5';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50681';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '1:10PM';
          awayTeam: {
            ID: '114';
            City: 'New York';
            Name: 'Yankees';
            Abbreviation: 'NYY';
          };
          homeTeam: {
            ID: '115';
            City: 'Tampa Bay';
            Name: 'Rays';
            Abbreviation: 'TB';
          };
          location: 'Tropicana Field';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '7';
        homeScore: '1';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '2';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '4';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50680';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '2:10PM';
          awayTeam: {
            ID: '121';
            City: 'Texas';
            Name: 'Rangers';
            Abbreviation: 'TEX';
          };
          homeTeam: {
            ID: '122';
            City: 'Houston';
            Name: 'Astros';
            Abbreviation: 'HOU';
          };
          location: 'Minute Maid Park';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '5';
        homeScore: '15';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '3';
            },
            {
              '@number': '3';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '2';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '4';
            },
            {
              '@number': '6';
              awayScore: '2';
              homeScore: '5';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '2';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50676';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '2:10PM';
          awayTeam: {
            ID: '117';
            City: 'Detroit';
            Name: 'Tigers';
            Abbreviation: 'DET';
          };
          homeTeam: {
            ID: '120';
            City: 'Minnesota';
            Name: 'Twins';
            Abbreviation: 'MIN';
          };
          location: 'Target Field';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '5';
        homeScore: '3';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '2';
              homeScore: '0';
            },
            {
              '@number': '2';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '2';
              homeScore: '3';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50675';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '2:15PM';
          awayTeam: {
            ID: '132';
            City: 'Pittsburgh';
            Name: 'Pirates';
            Abbreviation: 'PIT';
          };
          homeTeam: {
            ID: '133';
            City: 'St. Louis';
            Name: 'Cardinals';
            Abbreviation: 'STL';
          };
          location: 'Busch Stadium';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '10';
        homeScore: '6';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '3';
              homeScore: '4';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '2';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '5';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '2';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50682';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '2:15PM';
          awayTeam: {
            ID: '129';
            City: 'Philadelphia';
            Name: 'Phillies';
            Abbreviation: 'PHI';
          };
          homeTeam: {
            ID: '118';
            City: 'Kansas City';
            Name: 'Royals';
            Abbreviation: 'KC';
          };
          location: 'Kauffman Stadium';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '6';
        homeScore: '1';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '6';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50674';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '3:10PM';
          awayTeam: {
            ID: '139';
            City: 'San Diego';
            Name: 'Padres';
            Abbreviation: 'SD';
          };
          homeTeam: {
            ID: '138';
            City: 'Colorado';
            Name: 'Rockies';
            Abbreviation: 'COL';
          };
          location: 'Coors Field';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '7';
        homeScore: '10';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '4';
            },
            {
              '@number': '3';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '2';
              homeScore: '5';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '4';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50673';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '4:05PM';
          awayTeam: {
            ID: '135';
            City: 'Cincinnati';
            Name: 'Reds';
            Abbreviation: 'CIN';
          };
          homeTeam: {
            ID: '136';
            City: 'San Francisco';
            Name: 'Giants';
            Abbreviation: 'SF';
          };
          location: 'Oracle Park';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '5';
        homeScore: '6';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '2';
              homeScore: '2';
            },
            {
              '@number': '2';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '2';
            },
            {
              '@number': '8';
              awayScore: '1';
              homeScore: '2';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50672';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '4:07PM';
          awayTeam: {
            ID: '116';
            City: 'Cleveland';
            Name: 'Indians';
            Abbreviation: 'CLE';
          };
          homeTeam: {
            ID: '125';
            City: 'Oakland';
            Name: 'Athletics';
            Abbreviation: 'OAK';
          };
          location: 'Oakland-Alameda County Coliseum';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '5';
        homeScore: '3';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '2';
              homeScore: '0';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '2';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '3';
              homeScore: '1';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50671';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '4:10PM';
          awayTeam: {
            ID: '130';
            City: 'Atlanta';
            Name: 'Braves';
            Abbreviation: 'ATL';
          };
          homeTeam: {
            ID: '140';
            City: 'Arizona';
            Name: 'Diamondbacks';
            Abbreviation: 'ARI';
          };
          location: 'Chase Field';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '5';
        homeScore: '3';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '2';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '3';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '3';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50670';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '4:10PM';
          awayTeam: {
            ID: '126';
            City: 'Washington';
            Name: 'Nationals';
            Abbreviation: 'WAS';
          };
          homeTeam: {
            ID: '137';
            City: 'Los Angeles';
            Name: 'Dodgers';
            Abbreviation: 'LAD';
          };
          location: 'Dodger Stadium';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '0';
        homeScore: '6';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '4';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50669';
          scheduleStatus: 'Normal';
          originalDate: null;
          originalTime: null;
          delayedOrPostponedReason: null;
          date: '2019-05-12';
          time: '7:05PM';
          awayTeam: {
            ID: '134';
            City: 'Milwaukee';
            Name: 'Brewers';
            Abbreviation: 'MIL';
          };
          homeTeam: {
            ID: '131';
            City: 'Chicago';
            Name: 'Cubs';
            Abbreviation: 'CHC';
          };
          location: 'Wrigley Field';
        };
        isUnplayed: 'false';
        isInProgress: 'false';
        isCompleted: 'true';
        playStatus: null;
        awayScore: '1';
        homeScore: '4';
        inningSummary: {
          inning: [
            {
              '@number': '1';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '2';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '3';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '4';
              awayScore: '1';
              homeScore: '0';
            },
            {
              '@number': '5';
              awayScore: '0';
              homeScore: '1';
            },
            {
              '@number': '6';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '7';
              awayScore: '0';
              homeScore: '2';
            },
            {
              '@number': '8';
              awayScore: '0';
              homeScore: '0';
            },
            {
              '@number': '9';
              awayScore: '0';
              homeScore: '0';
            }
          ];
        };
      },
      {
        game: {
          ID: '50677';
          scheduleStatus: 'Postponed';
          originalDate: '2019-05-12';
          originalTime: '1:10PM';
          delayedOrPostponedReason: 'Rain';
          date: '2019-08-05';
          time: '1:15PM';
          awayTeam: {
            ID: '128';
            City: 'Miami';
            Name: 'Marlins';
            Abbreviation: 'MIA';
          };
          homeTeam: {
            ID: '127';
            City: 'New York';
            Name: 'Mets';
            Abbreviation: 'NYM';
          };
          location: 'Citi Field';
        };
        isUnplayed: 'true';
        isInProgress: 'false';
        isCompleted: 'false';
        playStatus: null;
        inningSummary: null;
      }
    ];
  };
}
