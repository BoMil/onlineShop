import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { AwesomeTooltipComponent } from './tooltip.component';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[awesomeTooltip]' })
export class AwesomeTooltipDirective implements OnInit {

  @Input('awesomeTooltip') text = '';
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

    top = {
        originX : 'center',
        originY : 'top',
        overlayX: 'center',
        overlayY: 'bottom',
    };

    right = {
        originX : 'end',
        originY : 'center',
        overlayX: 'start',
        overlayY: 'center',
    };

    bottom = {
        originX : 'center',
        originY : 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    };

    left = {
        originX : 'start',
        originY : 'center',
        overlayX: 'end',
        overlayY: 'center',
    };

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -2,
      },
    //   {
    //     originX : 'end',
    //     originY : 'center',
    //     overlayX: 'start',
    //     overlayY: 'center',
    // },
    // {
    //     originX : 'center',
    //     originY : 'bottom',
    //     overlayX: 'center',
    //     overlayY: 'top',
    // }
]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    const tooltipRef: ComponentRef<AwesomeTooltipComponent>
      = this.overlayRef.attach(new ComponentPortal(AwesomeTooltipComponent));
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }
}
