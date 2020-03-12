import { TestBed } from '@angular/core/testing';

import { CreatTaskService } from './creat-task.service';

describe('CreatTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatTaskService = TestBed.get(CreatTaskService);
    expect(service).toBeTruthy();
  });
});
