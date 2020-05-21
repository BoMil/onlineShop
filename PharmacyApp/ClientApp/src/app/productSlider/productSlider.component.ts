import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-slider',
  templateUrl: './productSlider.component.html',
  styleUrls: ['./productSlider.component.scss']
})
export class ProductSliderComponent {
    /**
     * Product entities to display
     */
    @Input() sliderEntities;
    /**
     * HTML colection of slider elements
     */
    entities: any;
    /**
     * Delay between the slide transition
     */
    transitionDelay: 500;
    /**
     * Minimum width of product items inside the slider
     */
    entityMinWidth = 290;
    sliderEntityWidth = {
        'min-width': `${this.entityMinWidth}px`
    };

    constructor() { }

    onNextClick() {
        this.entities = document.getElementsByClassName('slider-item');

        /**
         * Change slide after previous change action is finished
         */
        setTimeout(() => {
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < this.entities.length; index++) {
                const firstElementOffset = this.entities[0].offsetLeft;
                const secondElementOffset = this.entities[1].offsetLeft;
                if (firstElementOffset === 0 && secondElementOffset !== 0) {
                    break;
                }
                const element: HTMLElement = this.entities[index];
                const elementWidth = element.clientWidth;
                const left = element.style.left;
                const right = element.style.right;
                let value = 0;

                if (right && right !== '' && right !== '0px') {
                    const cleaned = right.replace('px', '');
                    value = Number(cleaned);
                    element.style.right = `${value - elementWidth}px`;
                } else {
                    if (left && left !== '' && left !== 'unset') {
                        const cleaned = left.replace('px', '');
                        value = Number(cleaned);
                        element.style.left = `${value + elementWidth}px`;
                    } else {
                        element.style.left = `${elementWidth}px`;
                    }
                }
                // console.log( 'Left', element.style.left);
            }
        }, this.transitionDelay);
    }

    /**
     * Change slide to previous
     */
    onPreviousClick() {
        this.entities = document.getElementsByClassName('slider-item');

        /**
         * Change slide after previous change action is finished
         */
        setTimeout(() => {
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < this.entities.length; index++) {
                const lastElementOffset = this.entities[this.entities.length - 1].offsetLeft;

                if (lastElementOffset === this.entityMinWidth * 2) {
                    break;
                }
                const element: HTMLElement = this.entities[index];
                const elementWidth = element.clientWidth;

                const left = element.style.left;
                const right = element.style.right;
                let value = 0;

                if (left && left !== '0px') {
                    const cleaned = left.replace('px', '');
                    value = Number(cleaned);
                    element.style.left = `${value - elementWidth}px`;
                } else {
                    if (right && right !== '') {
                        const cleaned = right.replace('px', '');
                        value = Number(cleaned);
                        element.style.right = `${value + elementWidth}px`;
                    } else {
                        element.style.right = `${elementWidth}px`;
                    }
                }
            }
        }, this.transitionDelay);
    }
}
