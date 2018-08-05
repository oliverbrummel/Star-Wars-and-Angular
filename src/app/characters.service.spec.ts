import { TestBed, inject } from '@angular/core/testing';

import { CharactersService } from './characters.service';

describe('StarwarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersService]
    });
  });

  it('should be created', inject([CharactersService], (service: CharactersService) => {
    expect(service).toBeTruthy();
  }));
});
