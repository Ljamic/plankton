import { Component } from '@angular/core';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html'
})
export class PartnershipComponent {
  constructor(private _scrollToTop: ScrollToTopService) {
    this._scrollToTop.scrollToTop();
  }
}
