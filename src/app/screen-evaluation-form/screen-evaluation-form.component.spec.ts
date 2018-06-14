import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEvaluationFormComponent } from './screen-evaluation-form.component';

describe('ScreenEvaluationFormComponent', () => {
  let component: ScreenEvaluationFormComponent;
  let fixture: ComponentFixture<ScreenEvaluationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenEvaluationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
