import { TestBed } from '@angular/core/testing';

import { PagingExampleService } from './paging-example.service';

describe('PagingExampleService', () => {
  let service: PagingExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagingExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
