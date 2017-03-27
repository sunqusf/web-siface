import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizaSuccessComponent } from './cotiza-success.component';

describe('CotizaSuccessComponent', () => {
  let component: CotizaSuccessComponent;
  let fixture: ComponentFixture<CotizaSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizaSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizaSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
