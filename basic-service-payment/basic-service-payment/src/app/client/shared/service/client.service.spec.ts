import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('#getValue should return http://localhost:5000', () => {
    expect(service.url).toBe('http://localhost:5000');
  });

});
