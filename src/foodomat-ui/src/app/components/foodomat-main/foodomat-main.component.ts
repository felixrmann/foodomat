import { Component, inject } from '@angular/core';
import { FoodomatService } from '../../services/foodomat.service';

@Component({
  selector: 'foodomat-main',
  templateUrl: './foodomat-main.component.html',
  styleUrl: './foodomat-main.component.scss',
})
export class FoodomatMainComponent {

  public foodomatService: FoodomatService = inject(FoodomatService);

}
