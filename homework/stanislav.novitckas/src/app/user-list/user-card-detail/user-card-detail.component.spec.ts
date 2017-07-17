import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDetailComponent } from './user-card-detail.component';

describe('UserCardDetailComponent', () => {
  let component: UserCardDetailComponent;
  let fixture: ComponentFixture<UserCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
