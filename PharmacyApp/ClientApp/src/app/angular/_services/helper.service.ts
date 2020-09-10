import { Injectable } from '@angular/core';
import { IDropdownSearchEntity } from 'src/app/model/dropdownSearchEntity';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
    constructor() { }

    transformDataForDropdown(data: any[], nameProperty: string): IDropdownSearchEntity[] {
        const transformedData: IDropdownSearchEntity[] = [];

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            const transformedElement: IDropdownSearchEntity = {
                entity: element,
                entityName: element[nameProperty],
                id: index,
                selected: false
            };
            transformedData.push(transformedElement);
        }

        return transformedData;
    }
}
