import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../_services/modal.service';
import { Modal } from '../_interfaces/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    modalSubscription$;

    constructor(private modalService: ModalService) { }

    ngOnInit() {
    }

    closeModal() {
        const modalData: Modal = {
            id: 'add-product-form',
            opened: false
        };
        this.modalService.toggleModal(modalData);
    }
}
