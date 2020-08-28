import { Subcategory } from './subcategory';

export interface Category {
    categoryId?: number;
    subcategories?: Subcategory[];
    categoryName: string;
}
