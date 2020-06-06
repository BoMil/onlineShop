import { Component, OnInit, Input } from '@angular/core';
// https://medium.com/@rubenvermeulen/using-an-svg-sprite-icon-system-in-angular-9d4056357b60
// https://icomoon.io/app/#/select
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
    /*
     * The string that point to the svg id
     * <svg-icon icon="icon-cubies_aid" class="icon"></svg-icon>
    */
    @Input() icon: string;

    constructor() { }

    ngOnInit() {}
}
