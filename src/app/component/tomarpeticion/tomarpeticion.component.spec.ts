import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarpeticionComponent } from './tomarpeticion.component';

describe('TomarpeticionComponent', () => {
  let component: TomarpeticionComponent;
  let fixture: ComponentFixture<TomarpeticionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomarpeticionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomarpeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
