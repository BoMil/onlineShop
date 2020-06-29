import { fetchWrapper } from '../helpers/fetch-wrapper';

export const dataService = {
    getAllCategories,
    getAllProducts,
    getInventoryData
};

function getAllCategories() {
    return fetchWrapper.get('../../../assets/database/allCategories.json');
}

function getAllProducts() {
    return fetchWrapper.get('../../../assets/database/allProducts.json');
}

function getInventoryData() {
    return fetchWrapper.get('../../../assets/database/inventoryData.json');
}
