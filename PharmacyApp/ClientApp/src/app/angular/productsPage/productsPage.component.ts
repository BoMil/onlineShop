import { Component, OnInit } from '@angular/core';
import { Crumb } from '../_interfaces/crumb';
import { SelectedMenuItem } from '../_interfaces/selected-menu-item';
import { DataService } from '../_services/dataService.service';

@Component({
  selector: 'app-products',
  templateUrl: './productsPage.component.html',
  styleUrls: ['./productsPage.component.scss']
})

export class ProductsPageComponent implements OnInit {
    allCategories: any = [
        {
            CategoryId: 0,
            CategoryName: 'Dodaci ishrani',
            Subcategories: [
                {
                    SubcategoryId: 10,
                    SubcategoryName: 'Bebe i deca',
                    ProductCategoryId: 0,
                    Products: []
                },
                {
                    SubcategoryId: 101,
                    SubcategoryName: 'Kasalj i prehlada',
                    ProductCategoryId: 0,
                    Products: []
                },
                {
                    SubcategoryId: 102,
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
                    ProductCategoryId: 2,
                    Products: []
                },
                {
                    SubcategoryId: 33,
                    SubcategoryName: 'Dijabetes',
                    ProductCategoryId: 2,
                    Products: []
                },
                {
                    SubcategoryId: 233,
                    SubcategoryName: 'Bol',
                    ProductCategoryId: 2,
                    Products: []
                },
            ]
        },
    ];

    /**
     * Array of category icons displayed before category name in sidebar menu
     */
    categoryIcons = ['icon-spoon-knife', 'icon-lab', 'icon-heart'];
    /**
     * Object that holds data about what category or subcategory is selected from the side menu
     */
    selectedItem: SelectedMenuItem = {
        category: {},
        subcategory: {},
        breadCrumbs: []
    };

    constructor(private dataService: DataService) { }

    ngOnInit() {
        // Preselect first category by default
        this.selectCategory(this.allCategories[0]);
        this.dataService.getAllProducts().subscribe(
            (data) => {
                console.log(data);
            }
        );
    }

    selectCategory(category: any): void {
        // Unselect subcategory
        this.selectedItem.subcategory.id = null;

        this.selectedItem.category.id = category.CategoryId;
        const breadCrumb: Crumb = {
            id: category.CategoryId,
            name: category.CategoryName,
            category: true
        };

        this.selectedItem.breadCrumbs = [];
        this.selectedItem.breadCrumbs.push(breadCrumb);
    }

    selectSubcategory(subcategory: any): void {
        this.selectedItem.category.id = null;
        this.selectedItem.subcategory.id = subcategory.SubcategoryId;

        // Make selected item bread-crumbs
        const parentCategoryIndex = this.allCategories.findIndex(element => element.CategoryId === subcategory.ProductCategoryId);

        const categoryCrumb: Crumb = {
            id: this.allCategories[parentCategoryIndex].CategoryId,
            name: this.allCategories[parentCategoryIndex].CategoryName,
            category: true
        };
        const subcategoryCrumb: Crumb = {
            id: subcategory.SubcategoryId,
            name: subcategory.SubcategoryName,
            parentId: subcategory.ProductCategoryId,
            category: false,
        };

        this.selectedItem.breadCrumbs = [];
        this.selectedItem.breadCrumbs.splice(0, 0, categoryCrumb, subcategoryCrumb);
    }

    selectBreadCrumb(crumb: Crumb): void {
        if (crumb.category) {
            // Make data compatible for category
            const category = {
                CategoryId: crumb.id,
                CategoryName: crumb.name
            };
            this.selectCategory(category);
        } else {
            // Make data compatible for subcategory
            const subcategory = {
                SubcategoryId: crumb.id,
                SubcategoryName: crumb.name,
                ProductCategoryId: crumb.parentId
            };
            this.selectSubcategory(subcategory);
        }
    }
}
