import { Injectable } from '@angular/core';
import { RequestHandlerService } from './requestHandler.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    productControllerUrl = '/api/Products';
    categoryControllerUrl = '/api/ProductCategories';
    subcategoryControllerUrl = '/api/ProductSubcategories';

    /**
     * Array that holds categories and subcategories that will be
     * displayed in the products page menu
     */
    productsPageMenuData: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private requestHandlerService: RequestHandlerService) {
        this.initializeProductsPageMenu();
     }

    /**
     * It will initialize data (categories and subcategories) that will be displayed in the products page menu
     * @name initializeProductsPageMenu
     */
    initializeProductsPageMenu() {
        this.getAllCategories().subscribe(
            (data) => {
                this.productsPageMenuData.next(data);
                // console.log('initializeProductsPageMenu', data);
            }
        );

    }

    /**
     * It will get all added products from the database
     * @name getAllProducts
     */
    getAllProducts(requestData = {}) {
        const url = this.productControllerUrl;
        return this.requestHandlerService.sendGetRequest(url, requestData);
    }

    /**
     * It will get product with the current id
     * @name getProductById
     * @param id Product id
     */
    getProductById(id) {
        const url = this.productControllerUrl + '/' + id;
        return this.requestHandlerService.sendGetRequest(url, {});
    }

    /**
     * It will update product with the current id
     * @name updateProductById
     * @param id Product id
     * @param product Product object
     */
    updateProductById(id, product) {
        const url = this.productControllerUrl + '/' + id;
        return this.requestHandlerService.sendPutRequest(url, product);
    }

    /**
     * It will add new product
     * @name addNewProduct
     * @param product Product object
     */
    addNewProduct(product) {
        const url = this.productControllerUrl;
        return this.requestHandlerService.sendPostRequest(url, product);
    }

    /**
     * It will delete product with the current id
     * @name deleteProductById
     * @param id Product id
     */
    deleteProductById(id) {
        const url = this.productControllerUrl + '/' + id;
        return this.requestHandlerService.sendDeleteRequest(url, {});
    }

    /**
     * It will get all products related to the subcategory with current id
     * @name getProductsBySubcategoryId
     * @param id Subcategory id
     */
    getProductsBySubcategoryId(id) {
        const url = this.productControllerUrl + '/bySubcategoryId/' + id;
        return this.requestHandlerService.sendGetRequest(url, {});
    }

    /**
     * It will get all products related to the category with the current id
     * @name getProductsByCategoryId
     * @param id Category id
     */
    getProductsByCategoryId(id) {
        const url = this.productControllerUrl + '/byCategoryId/' + id;
        return this.requestHandlerService.sendGetRequest(url, {});
    }

    /**
     * It will get all categories from the database
     * @name getAllCategories
     */
    getAllCategories(requestData = {}) {
        const url = this.categoryControllerUrl;
        return this.requestHandlerService.sendGetRequest(url, requestData);
    }

    /**
     * It will get all subcategories from the database
     * @name getAllSubcategories
     */
    getAllSubcategories(requestData = {}) {
        const url = this.subcategoryControllerUrl;
        return this.requestHandlerService.sendGetRequest(url, requestData);
    }
}
