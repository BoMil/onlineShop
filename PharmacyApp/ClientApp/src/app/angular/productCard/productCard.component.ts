import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../_interfaces/product';

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
        mainPrice: '0',
        priceDecimal: '00'
    };

    @Input() allowHoverEffect: boolean;
    @Input() productData: Product;

    constructor() { }

    ngOnInit() {
        this.formatPrice();
    }

    /**
     * It will format price from the backend and split it into main and decimal part
     */
    formatPrice(): void {
        // const priceArray = this.priceRaw.toFixed(2).split('');
        const priceArray = this.productData.price.toFixed(2).split('');
        const dotIndex = priceArray.indexOf('.');

        if (dotIndex) {
          priceArray[dotIndex] = ',';
          this.price.priceDecimal = priceArray.splice(dotIndex + 1, 2).join('');
        }
        this.price.mainPrice = priceArray.join('');
    }

}
