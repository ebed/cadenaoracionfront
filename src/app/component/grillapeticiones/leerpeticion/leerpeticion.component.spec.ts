import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerpeticionComponent } from './leerpeticion.component';

describe('LeerpeticionComponent', () => {
  let component: LeerpeticionComponent;
  let fixture: ComponentFixture<LeerpeticionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerpeticionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerpeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
