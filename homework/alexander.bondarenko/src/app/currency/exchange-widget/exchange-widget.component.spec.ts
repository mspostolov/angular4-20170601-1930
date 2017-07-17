import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeWidgetComponent } from './exchange-widget.component';

describe('ExchangeWidgetComponent', () => {
  let component: ExchangeWidgetComponent;
  let fixture: ComponentFixture<ExchangeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
