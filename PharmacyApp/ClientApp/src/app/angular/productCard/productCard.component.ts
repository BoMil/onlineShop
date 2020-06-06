import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-card',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.scss']
})
export class ProductCardComponent implements OnInit {

    // TODO: For development only, replace it with real data
    priceRaw = 1345.59;
    price = {
        mainPrice: null,
        priceDecimal: null
    };

    @Input() allowHoverEffect: boolean;

    constructor() { }

    ngOnInit() {
        this.formatPrice();
    }

    /**
     * It will format price from the backend and split it into main and decimal part
     */
    formatPrice(): void {
        const priceArray = this.priceRaw.toFixed(2).split('');
        const dotIndex = priceArray.indexOf('.');

        if (dotIndex) {
          priceArray[dotIndex] = ',';
          this.price.priceDecimal = priceArray.splice(dotIndex + 1, 2).join('');
          this.price.mainPrice = priceArray.join('');
        }
    }

}
