import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterViewInit {

  @ViewChild('gyros') gyros: ElementRef;
  @ViewChild('pizza') pizza: ElementRef;
  @ViewChild('pancake') pancake: ElementRef;
  @ViewChild('sandwiches') sandwiches: ElementRef;
  @ViewChild('salads') salads: ElementRef;
  @ViewChild('donuts') donuts: ElementRef;
  @ViewChild('pomfrit') pomfrit: ElementRef;
  @ViewChild('omelette') omelette: ElementRef;

  subscription: Subscription;

  constructor(private _router: Router, private _scrollToTop: ScrollToTopService) {
    this._scrollToTop.scrollToTop();
  }

  ngAfterViewInit(): void {

    this.subscription = this._router.events.subscribe(event => {
      
      if (event instanceof NavigationEnd) {
        const target = event.url.split('#')[1];
        this.scrollToSection(target);
      }
      
    });
 
    if (this._router.url.includes('#')) {
      const target = this._router.url.split('#')[1];      
      this.scrollToSection(target);
    }
  }

  scrollToSection(target: string): void {    
      this[target]?.nativeElement?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
