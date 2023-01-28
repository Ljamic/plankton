import { Component } from '@angular/core';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  constructor(private _scrollToTop: ScrollToTopService) {
    this._scrollToTop.scrollToTop();
  }
}
