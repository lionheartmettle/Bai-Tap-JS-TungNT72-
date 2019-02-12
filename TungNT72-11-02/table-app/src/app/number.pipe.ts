import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {
  transform(data: [], field: string): any {
    if (field === 'id' || field === 'salary') {
      return data.sort((a, b) => a[field] - b[field]);
    }
    return data.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
