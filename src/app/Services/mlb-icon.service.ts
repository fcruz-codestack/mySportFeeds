import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MlbIconService {

  constructor() { }
  getLogo(teamName: string) {
    let logo = '';
    switch (teamName) {
      case 'ARI':
        logo = 'assets/img/mlb/ARI.jpg';
        break;
      case 'ATL':
        logo = 'assets/img/mlb/ATL.jpg';
        break;
      case 'BAL':
        logo = 'assets/img/mlb/BAL.jpg';
        break;
      case 'BOS':
        logo = 'assets/img/mlb/BOS.jpg';
        break;
      case 'CHC':
        logo = 'assets/img/mlb/CHC.jpg';
        break;
      case 'CIN':
        logo = 'assets/img/mlb/CIN.png';
        break;
      case 'CLE':
        logo = 'assets/img/mlb/CLE.png';
        break;
      case 'COL':
        logo = 'assets/img/mlb/COL.jpg';
        break;
      case 'CWS':
        logo = 'assets/img/mlb/CWS.png';
        break;
      case 'DET':
        logo = 'assets/img/mlb/DET.png';
        break;
      case 'HOU':
        logo = 'assets/img/mlb/HOU.jpg';
        break;
      case 'KC':
        logo = 'assets/img/mlb/KC.png';
        break;
      case 'LAA':
        logo = 'assets/img/mlb/LAA.png';
        break;
      case 'LAD':
        logo = 'assets/img/mlb/LAD.jpg';
        break;
      case 'MIA':
        logo = 'assets/img/mlb/MIA.jpg';
        break;
      case 'MIL':
        logo = 'assets/img/mlb/MIL.jpg';
        break;
      case 'MIN':
        logo = 'assets/img/mlb/MIN.jpg';
        break;
      case 'NYM':
        logo = 'assets/img/mlb/NYM.jpg';
        break;
        case 'NYY':
          logo = 'assets/img/mlb/NYY.png';
          break;
      case 'OAK':
        logo = 'assets/img/mlb/OAK.jpg';
        break;
      case 'PHI':
        logo = 'assets/img/mlb/PHI.jpg';
        break;
      case 'PIT':
        logo = 'assets/img/mlb/PIT.jpg';
        break;
      case 'SD':
        logo = 'assets/img/mlb/SD.jpg';
        break;
      case 'SEA':
        logo = 'assets/img/mlb/SEA.jpg';
        break;
      case 'SF':
        logo = 'assets/img/mlb/SF.jpg';
        break;
      case 'STL':
        logo = 'assets/img/mlb/STL.jpg';
        break;
      case 'TB':
        logo = 'assets/img/mlb/TB.png';
        break;
      case 'TEX':
        logo = 'assets/img/mlb/TEX.jpg';
        break;
      case 'TOR':
        logo = 'assets/img/mlb/TOR.jpg';
        break;
      case 'WAS':
        logo = 'assets/img/mlb/WAS.jpg';
        break;
      default:
        break;
    }
    return logo;
  }
}
