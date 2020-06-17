import { fetchWrapper } from '../helpers/fetch-wrapper';

export const dataService = {
    getAllCategories,
    getAllProducts
};

function getAllCategories() {
    return fetchWrapper.get('../../../assets/database/allCategories.json');
}

function getAllProducts() {
    return fetchWrapper.get('../../../assets/database/allProducts.json');
}
