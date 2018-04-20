import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillapeticionesComponent } from './grillapeticiones.component';

describe('GrillapeticionesComponent', () => {
  let component: GrillapeticionesComponent;
  let fixture: ComponentFixture<GrillapeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillapeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillapeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
