import { Pipe, PipeTransform } from '@angular/core';
interface Sae {
  type: string;
  value: any;
}
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], field: Sae): any {
    if (!field.type) {
      return data;
    }
    return data.filter(a => {
      if ( typeof(a[field.type]) === 'number') {
        const b = a[field.type].toString();
        const c = field.value.toString();
        if (b.search(c) !== -1) {
          return a;
        }
      } else if ((<string>(a[field.type])).search(<string>field.value) !== -1) {
        return a;
      }
    });
  }

}
