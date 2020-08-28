import { Product } from './product';

export interface Subcategory {
    productCategoryId: number;
    products?: Product[];
    subcategoryId?: number;
    subcategoryName: string;
}
