import { TestBed } from '@angular/core/testing';

import { TodoListServiceService } from './todo-list-service.service';

describe('TodoListServiceService', () => {
  let service: TodoListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
