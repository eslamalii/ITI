import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(filterArray: any[], filterText: string, filterProps: string[]) {
    let list: any = [];
    if (!filterText) {
      return filterArray;
    } else {
      filterArray.forEach((obj) => {
        filterProps.forEach((prop) => {
          if (
            obj[prop] &&
            obj[prop]
              .toString()
              .toLowerCase()
              .includes(filterText.toLowerCase())
          ) {
            if (!list.includes(obj)) {
              list.push(obj);
            }
          }
        });
      });
    }
    return list;
  }
}
