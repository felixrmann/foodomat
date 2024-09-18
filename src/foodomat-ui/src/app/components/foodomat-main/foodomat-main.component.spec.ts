import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodomatMainComponent } from './foodomat-main.component';

describe('FoodomatMainComponent', () => {
  let component: FoodomatMainComponent;
  let fixture: ComponentFixture<FoodomatMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodomatMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodomatMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
