/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MlbIconService } from './mlb-icon.service';

describe('Service: MlbIcon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlbIconService]
    });
  });

  it('should ...', inject([MlbIconService], (service: MlbIconService) => {
    expect(service).toBeTruthy();
  }));
});
