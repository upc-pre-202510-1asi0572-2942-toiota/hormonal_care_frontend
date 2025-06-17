import { TestBed } from '@angular/core/testing';

import { SearchPatientsService } from './search-patients.service';

describe('SearchPatientsService', () => {
  let service: SearchPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
