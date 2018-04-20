import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejasalidaComponent } from './bandejasalida.component';

describe('BandejasalidaComponent', () => {
  let component: BandejasalidaComponent;
  let fixture: ComponentFixture<BandejasalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejasalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejasalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
