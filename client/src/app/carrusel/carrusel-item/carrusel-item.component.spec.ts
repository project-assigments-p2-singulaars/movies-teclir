import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselItemComponent } from './carrusel-item.component';

describe('CarruselItemComponent', () => {
  let component: CarruselItemComponent;
  let fixture: ComponentFixture<CarruselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
