import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariomensajeComponent } from './formulariomensaje.component';

describe('FormulariomensajeComponent', () => {
  let component: FormulariomensajeComponent;
  let fixture: ComponentFixture<FormulariomensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariomensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariomensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
