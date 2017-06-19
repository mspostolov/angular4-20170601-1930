import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCurrencyComponent } from './users-currency.component';

describe('UsersCurrencyComponent', () => {
  let component: UsersCurrencyComponent;
  let fixture: ComponentFixture<UsersCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
