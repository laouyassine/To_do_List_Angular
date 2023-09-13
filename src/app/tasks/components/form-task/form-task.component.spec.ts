import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaskComponent } from './form-task.component';

describe('FormTaskComponent', () => {
  let component: FormTaskComponent;
  let fixture: ComponentFixture<FormTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTaskComponent]
    });
    fixture = TestBed.createComponent(FormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
