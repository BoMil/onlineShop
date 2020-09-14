import { Component, OnInit, OnDestroy } from '@angular/core';
import { Crumb } from '../_interfaces/crumb';
import { SelectedMenuItem } from '../_interfaces/selected-menu-item';
import { DataService } from '../_services/dataService.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Category } from '../_interfaces/category';
import { Subcategory } from '../_interfaces/subcategory';

@Component({
  selector: 'app-products',
  templateUrl: './productsPage.component.html',
  styleUrls: ['./productsPage.component.scss']
})

export class ProductsPageComponent implements OnInit, OnDestroy {
    /**
     * Subject used to cancel all subscriptions after component is destroyed
     */
    ngUnsubscribe: Subject<any> = new Subject<any>();
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
    allCategories: Category[] = [];
    allProducts: any = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.productsPageMenuData.subscribe(
            (data) => {
                this.allCategories = data;
                // console.log('allCategories', this.allCategories);
                if (this.allCategories.length) {
                    this.selectCategory(this.allCategories[0]);
                }

            }
        );

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    selectCategory(category: Category): void {
        this.dataService.getProductsByCategoryId(category.categoryId)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
            (data) => {
                this.allProducts = data;
                // Unselect subcategory
                this.selectedItem.subcategory.id = null;

                this.selectedItem.category.id = category.categoryId;
                const breadCrumb: Crumb = {
                    id: category.categoryId,
                    name: category.categoryName,
                    category: true
                };

                this.selectedItem.breadCrumbs = [];
                this.selectedItem.breadCrumbs.push(breadCrumb);
                console.log('getProductsByCategoryId', data);
            },
            (error) => {}
        );

    }

    selectSubcategory(subcategory: Subcategory): void {

        this.dataService.getProductsBySubcategoryId(subcategory.subcategoryId)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
            (data) => {
                this.allProducts = data;
                this.selectedItem.category.id = null;
                this.selectedItem.subcategory.id = subcategory.subcategoryId;

                // Make selected item bread-crumbs
                const parentCategoryIndex = this.allCategories.findIndex(element => element.categoryId === subcategory.productCategoryId);

                const categoryCrumb: Crumb = {
                    id: this.allCategories[parentCategoryIndex].categoryId,
                    name: this.allCategories[parentCategoryIndex].categoryName,
                    category: true
                };
                const subcategoryCrumb: Crumb = {
                    id: subcategory.subcategoryId,
                    name: subcategory.subcategoryName,
                    parentId: subcategory.productCategoryId,
                    category: false,
                };

                this.selectedItem.breadCrumbs = [];
                this.selectedItem.breadCrumbs.splice(0, 0, categoryCrumb, subcategoryCrumb);
                // console.log('getProductsBySubcategoryId', data);
            }
        );
    }

    selectBreadCrumb(crumb: Crumb): void {
        if (crumb.category) {
            // Make data compatible for category
            const category: Category = {
                categoryId: crumb.id,
                categoryName: crumb.name
            };
            this.selectCategory(category);
        } else {
            // Make data compatible for subcategory
            const subcategory: Subcategory = {
                subcategoryId: crumb.id,
                subcategoryName: crumb.name,
                productCategoryId: crumb.parentId
            };
            this.selectSubcategory(subcategory);
        }
    }
}
