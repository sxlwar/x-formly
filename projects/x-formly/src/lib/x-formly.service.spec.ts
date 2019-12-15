import { TestBed } from '@angular/core/testing';

import { XFormlyService } from './x-formly.service';

describe('XFormlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XFormlyService = TestBed.get(XFormlyService);
    expect(service).toBeTruthy();
  });
});
