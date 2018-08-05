import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDashboardComponent } from './screen-dashboard.component';

describe('ScreenDashboardComponent', () => {
  let component: ScreenDashboardComponent;
  let fixture: ComponentFixture<ScreenDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
