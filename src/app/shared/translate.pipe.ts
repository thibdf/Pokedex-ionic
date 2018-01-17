import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

import { translations } from './translations';

@Pipe({ name: 'pkmnTranslate' })
export class TranslatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!isString(value)) {
      return '-';
    }
    return translations.get(value) || value;
  }

}
