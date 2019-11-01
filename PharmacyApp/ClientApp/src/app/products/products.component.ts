import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    allCategories = [
        {
            CategoryId: 0,
            CategoryName: 'Dodaci ishrani',
            Subcategories: [
                {
                    SubcategoryId: 0,
                    SubcategoryName: 'Bebe i deca',
                    ProductCategoryId: 0,
                    Products: []
                },
                {
                    SubcategoryId: 1,
                    SubcategoryName: 'Kasalj i prehlada',
                    ProductCategoryId: 0,
                    Products: []
                },
                {
                    SubcategoryId: 2,
                    SubcategoryName: 'Vitamini i minerali',
                    ProductCategoryId: 0,
                    Products: []
                },
            ]
        },
        {
            CategoryId: 1,
            CategoryName: 'Kozmetika',
            Subcategories: [
                {
                    SubcategoryId: 12,
                    SubcategoryName: 'Nega tela',
                    ProductCategoryId: 1,
                    Products: []
                },
                {
                    SubcategoryId: 11,
                    SubcategoryName: 'Nega lica',
                    ProductCategoryId: 1,
                    Products: []
                },
                {
                    SubcategoryId: 23,
                    SubcategoryName: 'Nega kose',
                    ProductCategoryId: 1,
                    Products: []
                },
            ]
        },
        {
            CategoryId: 2,
            CategoryName: 'Nega i zastita',
            Subcategories: [
                {
                    SubcategoryId: 122,
                    SubcategoryName: 'Preparati za suncanje',
                    ProductCategoryId: 1,
                    Products: []
                },
                {
                    SubcategoryId: 33,
                    SubcategoryName: 'Dijabetes',
                    ProductCategoryId: 1,
                    Products: []
                },
                {
                    SubcategoryId: 233,
                    SubcategoryName: 'Bol',
                    ProductCategoryId: 1,
                    Products: []
                },
            ]
        },
    ];

    categoryIcons = ['icon-spoon-knife', 'icon-lab', 'icon-heart'];
  constructor() { }

  ngOnInit() {
  }

}
