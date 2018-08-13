import { TestBed, inject } from '@angular/core/testing';

import { ImageHelperService } from './image-helper.service';

describe('ImageHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageHelperService]
    });
  });

  it('should be created', inject([ImageHelperService], (service: ImageHelperService) => {
    expect(service).toBeTruthy();
  }));
});
