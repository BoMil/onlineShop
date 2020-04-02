import { Component, OnInit, Input } from '@angular/core';

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
