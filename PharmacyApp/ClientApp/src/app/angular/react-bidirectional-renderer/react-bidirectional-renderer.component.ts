import {Component, Injector, Input, OnInit, OnDestroy} from '@angular/core';
import { ReactBidirectionalApplication } from 'src/app/react/react-bidirectional-application';
import { ModalService } from '../_services/modal.service';

@Component({
  selector: 'app-react-owc-renderer',
  template: `<div class="react-container" id="react-owc-renderer">
  </div>`
})
export class ReactBidirectionalRendererComponent implements OnInit {

    constructor(public injector: Injector, private modalService: ModalService) { }

    ngOnInit() {
        ReactBidirectionalApplication.initialize('react-owc-renderer', this.injector, this.modalService.getModalSubscription());
    }
}
