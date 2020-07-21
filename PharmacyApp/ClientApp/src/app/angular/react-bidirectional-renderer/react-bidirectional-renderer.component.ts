import {Component, Injector, Input, OnInit, OnDestroy} from '@angular/core';
import { ReactBidirectionalApplication } from 'src/app/react/react-bidirectional-application';
import { ModalService } from '../_services/modal.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Modal } from '../_interfaces/modal';

@Component({
  selector: 'app-react-owc-renderer',
  template: `<div class="react-container" id="react-owc-renderer">
  </div>`
})
export class ReactBidirectionalRendererComponent implements OnInit, OnDestroy {

    constructor(public injector: Injector, private modalService: ModalService) { }

    modal$: BehaviorSubject<Modal>;

    ngOnInit() {
        this.modal$ = this.modalService.getModalSubscription();

        ReactBidirectionalApplication.initialize('react-owc-renderer', this.injector, this.modal$);
    }

    ngOnDestroy() {
        if (this.modal$) {
            this.modal$.unsubscribe();
            console.log('Modal is unsubscribed!');
        }
    }
}
