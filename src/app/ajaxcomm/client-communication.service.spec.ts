import { TestBed, inject } from '@angular/core/testing';

import { ClientCommunicationService } from './client-communication.service';

describe('ClientCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientCommunicationService]
    });
  });

  it('should be created', inject([ClientCommunicationService], (service: ClientCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
