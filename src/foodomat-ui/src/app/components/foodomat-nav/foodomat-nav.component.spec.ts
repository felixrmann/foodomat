import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodomatNavComponent } from './foodomat-nav.component';

describe('FoodomatNavComponent', () => {
  let component: FoodomatNavComponent;
  let fixture: ComponentFixture<FoodomatNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodomatNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodomatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
