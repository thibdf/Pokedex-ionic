import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

import { translations_en } from './translations.en';
import { translations_fr } from './translations.fr';
import { translations_de } from './translations.de';

import { LanguageService } from "../core/language.service";

@Pipe({ name: 'pkmnTranslate' })
export class TranslatePipe implements PipeTransform {
  
  constructor(private languageService: LanguageService) {
  }

  transform(value: string, args?: any): any {
    if (!isString(value)) {
      return '-';
    }

    switch(this.languageService.language) {
      case 'de':
        return translations_de.get(value) || value;
      case 'fr':
        return translations_fr.get(value) || value;
      default:
        return translations_en.get(value) || value;

    }
  }
  
}
