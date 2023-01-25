import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: '.card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
    
  }

}

export class Product {
  headline: string;
  img: string;
  description: string;
  url: string;
}