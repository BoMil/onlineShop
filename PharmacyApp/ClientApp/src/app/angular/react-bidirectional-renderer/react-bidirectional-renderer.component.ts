import {Component, Injector, Input, OnInit} from '@angular/core';
import { ReactBidirectionalApplication } from 'src/app/react/react-bidirectional-application';

@Component({
  selector: 'app-react-owc-renderer',
  template: `<div class="react-container" id="react-owc-renderer">
  </div>`
})
export class ReactBidirectionalRendererComponent implements OnInit {

    constructor(public injector: Injector) { }

    ngOnInit() {
        ReactBidirectionalApplication.initialize('react-owc-renderer', this.injector);
    }
}
