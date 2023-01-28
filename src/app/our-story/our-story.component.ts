import { Component } from '@angular/core';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html'
})
export class OurStoryComponent {
  constructor(private _scrollToTop: ScrollToTopService) {
    this._scrollToTop.scrollToTop();
  }


}
