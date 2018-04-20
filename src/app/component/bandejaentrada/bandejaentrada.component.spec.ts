import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaentradaComponent } from './bandejaentrada.component';

describe('BandejaentradaComponent', () => {
  let component: BandejaentradaComponent;
  let fixture: ComponentFixture<BandejaentradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaentradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
