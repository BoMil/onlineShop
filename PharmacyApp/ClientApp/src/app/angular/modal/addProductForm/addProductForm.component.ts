import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../_services/dataService.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from '../../_services/helper.service';
import { Modal } from '../../_interfaces/modal';
import { ModalService } from '../../_services/modal.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'add-product-form',
  templateUrl: './addProductForm.component.html',
  styleUrls: ['./addProductForm.component.scss']
})
export class AddProductFormComponent implements OnInit, OnDestroy {
    /**
     * Subject used to cancel all subscriptions after component is destroyed
     */
    ngUnsubscribe: Subject<any> = new Subject<any>();
    addProductsForm: FormGroup;
    categories: any = [];
    subcategories: any = [];
    submitted = false;
    categoryText = 'Select category';
    subcategoryText = 'Select subcategory';
    selectedCategory: any;
    selectedSubcategory: any;

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private modalService: ModalService,
        private helperService: HelperService) { }

    ngOnInit() {
        this.dataService.getAllCategories()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (data) => {
                    const entities: any = data;
                    this.categories = this.helperService.transformDataForDropdown(entities, 'categoryName');
                    // console.log('getAllCategories', data);
                },
                (error) => {}
            );
        this.initializeForm();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    initializeForm() {
        this.addProductsForm = this.formBuilder.group({
            productName: ['', Validators.required],
            productDescription: ['', [ Validators.required, Validators.maxLength(50)]],
            productPrice: [0, Validators.required]
        });
    }

    onCategorySelected(item) {
        this.subcategories = [];
        this.selectedSubcategory = null;
        this.selectedCategory = item.entity;
        if (item.entity.categoryId) {
            this.dataService.getSubcategoriesByCategoryId(item.entity.categoryId)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (data) => {
                    const entities: any = data;
                    this.subcategories = this.helperService.transformDataForDropdown(entities, 'subcategoryName');
                    // console.log('getSubcategoriesByCategoryId', data);
                },
                (error) => {}
            );
        }
    }

    onSubcategorySelected(item) {
        this.selectedSubcategory = item.entity;
    }

    subimtForm() {
        this.submitted = true;

        if (this.addProductsForm.invalid || !this.selectedSubcategory || !this.selectedCategory) {
            return;
        }

        const request = {
            productName: this.f.productName.value ,
            productDescription: this.f.productDescription.value,
            subcategoryId: this.selectedSubcategory.subcategoryId,
            categoryID: this.selectedCategory.categoryId,
            price: this.f.productPrice.value,
            previousPrice: 0
        };

        this.dataService.addNewProduct(request)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (data) => {
                    const modalData: Modal = {
                        id: 'add-product-form',
                        opened: false
                    };
                    this.modalService.toggleModal(modalData);
                },
                (error) => {}
            );
    }

    // convenience getter for easy access to form fields
    get f() { return this.addProductsForm.controls; }
}
