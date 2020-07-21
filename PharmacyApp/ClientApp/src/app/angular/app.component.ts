import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './_services/modal.service';
import { Modal } from './_interfaces/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'ClientApp';
    isModalVisible = false;
    modalSubscription$;

    constructor(private modalService: ModalService) { }

    ngOnInit(): void {
        this.modalSubscription$ = this.modalService.modalData.subscribe(
            (data: Modal) => {
                this.setModalVisibility(data.opened);
            }
        );
    }

    ngOnDestroy() {
        if (this.modalSubscription$) {
            this.modalSubscription$.unsubscribe();
            console.log('Modal is unsubscribed!');
        }
    }

    setModalVisibility(isModalVisible: boolean) {
        this.isModalVisible = isModalVisible;
    }

}
