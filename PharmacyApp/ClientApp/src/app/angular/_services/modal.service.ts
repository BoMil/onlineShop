import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Modal } from '../_interfaces/modal';



@Injectable({
  providedIn: 'root'
})
export class ModalService {
    modalData: BehaviorSubject<Modal> = new BehaviorSubject({id: '', opened: false});

    constructor() { }

    toggleModal(data: Modal) {
        this.modalData.next(data);
    }

    getModalSubscription() {
        return this.modalData;
    }
}
