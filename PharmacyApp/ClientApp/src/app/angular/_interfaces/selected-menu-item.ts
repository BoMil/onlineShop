import { Crumb } from './crumb';

export interface SelectedMenuItem {
    category: any;
    subcategory: any;
    breadCrumbs: [Crumb?];
}
