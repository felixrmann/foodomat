import { Component } from '@angular/core';

@Component({
  selector: 'foodomat-nav',
  templateUrl: './foodomat-nav.component.html',
  styleUrl: './foodomat-nav.component.scss'
})
export class FoodomatNavComponent {

  private _active: boolean = false;

  public get active(): boolean {
    return this._active;
  }

  public set active(newValue: boolean) {
    console.log(newValue);
    this._active = newValue;
  }

}
