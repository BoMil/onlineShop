import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IDropdownSearchEntity } from 'src/app/model/dropdownSearchEntity';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dropdown-search',
  templateUrl: './dropdownSearch.component.html',
  styleUrls: ['./dropdownSearch.component.scss']
})
export class DropdownSearchComponent implements OnInit {
    @Input() dropdownItems: IDropdownSearchEntity[];
    @Input() label: string;
    @Input() isDisabled: boolean;
    @Output() itemSelected = new EventEmitter<any>();
    @ViewChild('dropdownMenu', { static: false}) dropdownMenu: ElementRef;

    open = false;

    constructor() { }

    ngOnInit() {
        // console.log('dropdownMenu', this.dropdownMenu.nativeElement);
    }

    toggleDropdown() {
        this.open = !this.open;
        this.dropdownMenu.nativeElement.classList.toggle('open');
    }

    selectItem(item: IDropdownSearchEntity) {
        this.deselectItems();
        item.selected = true;
        this.label = item.entityName;
        this.itemSelected.emit(item);
        this.toggleDropdown();
    }

    deselectItems() {
        for (let index = 0; index < this.dropdownItems.length; index++) {
            const element = this.dropdownItems[index];
            element.selected = false;
        }
    }

}
