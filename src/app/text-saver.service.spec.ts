import { TestBed } from '@angular/core/testing';

import { TextSaverService } from './text-saver.service';

describe('TextSaverService', () => {
  let service: TextSaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
