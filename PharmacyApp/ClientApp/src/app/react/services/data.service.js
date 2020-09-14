import { fetchWrapper } from '../helpers/fetch-wrapper';

export const dataService = {
    getAllCategories,
    getAllProducts,
    getInventoryData
};
const productControllerUrl = '/api/Products',
      categoryControllerUrl = '/api/ProductCategories',
      subcategoryControllerUrl = '/api/ProductSubcategories';

function getAllCategories() {
    const url = categoryControllerUrl;
    return fetchWrapper.get(url);
    // return fetchWrapper.get('../../../assets/database/allCategories.json');
}

function getAllProducts() {
    const url = productControllerUrl;
    return fetchWrapper.get(url);
    // return fetchWrapper.get('../../../assets/database/allProducts.json');
}

function getInventoryData() {
    return fetchWrapper.get('../../../assets/database/inventoryData.json');
}
