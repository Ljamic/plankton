import { Component } from '@angular/core';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private _scrollToTop: ScrollToTopService) {
    this._scrollToTop.scrollToTop();
  }

}
