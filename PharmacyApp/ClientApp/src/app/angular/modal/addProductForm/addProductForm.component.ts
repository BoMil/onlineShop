import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'add-product-form',
  templateUrl: './addProductForm.component.html',
  styleUrls: ['./addProductForm.component.scss']
})
export class AddProductFormComponent implements OnInit {
    addProductsForm: FormGroup;
    categories = ['Category 1', 'Category 2', 'Category 3'];
    subcategories = ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm() {
        this.addProductsForm = this.formBuilder.group({
            productName: ['', Validators.required],
            category: [this.categories[0]],
            subcategory: [this.subcategories[0]]
        });
    }

    fetchCategories() {}

    subimtForm() {}

    // convenience getter for easy access to form fields
    get f() { return this.addProductsForm.controls; }
}
