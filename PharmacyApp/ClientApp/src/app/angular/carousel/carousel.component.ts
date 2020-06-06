import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut} from './carousel.animations';
import { ICarouselItem } from '../_interfaces/carouselItem';

// Inspired by: https://medium.com/showpad-engineering/angular-animations-lets-create-a-carousel-with-reusable-animations-81c0dd8847e8

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, {params: { time: '1300ms' }})]),
      transition('* => void', [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
    //   transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
    //   transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    /**
     * Slides object that holds images and additional data
     */
    @Input() slides: ICarouselItem[];
    /**
     * Control how long single slide will be visible before next is displayed
     */
    @Input() timeDelayInMs: number;
    /**
     * Determine should slides automaticaly changed or not
     */
    @Input() autoChangeOn: boolean;

    currentSlide = 0;
    slideChangeInterval;

    constructor() { }

    ngAfterViewInit() {
        this.setCarouselInterval();
    }

    ngOnDestroy() {
        this.clearCarouselInterval();
    }

    /**
     * Change slide to previous
     */
    onPreviousClick() {
        this.refreshCarouselInterval();
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
        // console.log('previous clicked, new current slide is: ', this.currentSlide);
    }

    /**
     * Change slide to next
     */
    onNextClick() {
        this.refreshCarouselInterval();
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
        // console.log('next clicked, new current slide is: ', this.currentSlide);
    }

    /**
     * Set the time interval in wich slides will be changed automaticaly,
     * from current to next
     */
    setCarouselInterval() {
        if (this.autoChangeOn) {
            const interval = this.timeDelayInMs ? this.timeDelayInMs : 2000;
            this.slideChangeInterval = setInterval(() => {
                // console.log('Automatic next');
                this.onNextClick();
            }, interval);
        }
    }

    /**
     * It will refresh the carousel interval every time a user click on
     * the current or next arrow
     */
    refreshCarouselInterval() {
        this.clearCarouselInterval();
        this.setCarouselInterval();
    }

    /**
     * It will clear the carousel interval to avoid memory leaks
     */
    clearCarouselInterval() {
        if (this.slideChangeInterval) { clearInterval(this.slideChangeInterval); }
    }
}
