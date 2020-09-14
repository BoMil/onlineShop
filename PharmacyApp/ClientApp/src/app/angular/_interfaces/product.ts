export interface Product {
    categoryID: number;
    subcategoryID: number;
    labels: any[];
    previousPrice?: number;
    price: number;
    quantity: number;
    productDescription: string;
    productId?: number;
    productName: string;
    categoryName: string;
    subcategoryName: string;
}

