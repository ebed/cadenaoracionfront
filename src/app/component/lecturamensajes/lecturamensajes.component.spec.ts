import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturamensajesComponent } from './lecturamensajes.component';

describe('LecturamensajesComponent', () => {
  let component: LecturamensajesComponent;
  let fixture: ComponentFixture<LecturamensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturamensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturamensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
