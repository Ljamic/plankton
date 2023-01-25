import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterViewInit {

  @ViewChild('gyros') gyros: ElementRef;
  @ViewChild('pizza') pizza: ElementRef;
  @ViewChild('pancake') pancake: ElementRef;
  @ViewChild('sandwiches') sandwiches: ElementRef;
  
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    if (this.router.url.includes('#')) {
      const target = this.router.url.split('#')[1];
      setTimeout(() => {      
        this[target].nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 0)
    }

  }

}
