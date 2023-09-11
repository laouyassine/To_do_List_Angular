import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTasksListComponent } from './page-tasks-list.component';

describe('PageTasksListComponent', () => {
  let component: PageTasksListComponent;
  let fixture: ComponentFixture<PageTasksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTasksListComponent]
    });
    fixture = TestBed.createComponent(PageTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
