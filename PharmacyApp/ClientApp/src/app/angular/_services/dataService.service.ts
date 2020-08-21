import { Injectable } from '@angular/core';
import { RequestHandlerService } from './requestHandler.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private requestHandlerService: RequestHandlerService) { }

    /**
     * It will get all added products from the database
     * @name getAllProducts
     */
    getAllProducts(requestData = {}) {
        return this.requestHandlerService.sendGetRequest('/api/Products', requestData);
    }

    /**
     * It will get all categories from the database
     * @name getAllCategories
     */
    getAllCategories(requestData = {}) {
        return this.requestHandlerService.sendGetRequest('/api/ProductCategories', requestData);
    }

    /**
     * It will get all subcategories from the database
     * @name getAllSubcategories
     */
    getAllSubcategories(requestData = {}) {
        return this.requestHandlerService.sendGetRequest('/api/ProductSubcategories', requestData);
    }
}
