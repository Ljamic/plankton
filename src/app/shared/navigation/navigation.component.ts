import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  burgerMenuActive: boolean = false;
  subMenuOpen: boolean = false;

  constructor(private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.burgerMenuActive = false;
        this.subMenuOpen = false;
      }
    });
  }


}
