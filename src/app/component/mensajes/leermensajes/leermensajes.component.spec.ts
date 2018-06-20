import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeermensajesComponent } from './leermensajes.component';

describe('LeermensajesComponent', () => {
  let component: LeermensajesComponent;
  let fixture: ComponentFixture<LeermensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeermensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeermensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
