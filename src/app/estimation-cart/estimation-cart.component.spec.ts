import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationCartComponent } from './estimation-cart.component';

describe('EstimationCartComponent', () => {
  let component: EstimationCartComponent;
  let fixture: ComponentFixture<EstimationCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
