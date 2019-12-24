import { TestBed } from '@angular/core/testing';

import { LolService } from './lol.service';

describe('LolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LolService = TestBed.get(LolService);
    expect(service).toBeTruthy();
  });
});
