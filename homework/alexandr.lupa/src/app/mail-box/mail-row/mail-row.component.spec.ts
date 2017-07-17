import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailRowComponent } from './mail-row.component';

describe('MailRowComponent', () => {
  let component: MailRowComponent;
  let fixture: ComponentFixture<MailRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
