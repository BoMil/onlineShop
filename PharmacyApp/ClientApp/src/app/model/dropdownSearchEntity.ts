export interface IDropdownSearchEntity {
    entity: any;
    entityName: string;
    selected: boolean;
    id: number;
}

export class DropdownSearchEntity {
    entity: any;
    selected: boolean;
    id: number;
    entityName: string;

    constructor(item: IDropdownSearchEntity) {
        this.entity = item.entity;
        this.selected = item.selected;
        this.id = item.id;
        this.entityName = item.entityName;
    }
}
