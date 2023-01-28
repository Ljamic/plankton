import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {

  constructor() { }

  scrollToTop(): void {
    window.scroll({ 
        top: 0
    });
  }
}
