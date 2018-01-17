import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() {
  }

  getIdFromUrl(url: string): number {
    const splitUrlArray = url.split('/');
    return Number(splitUrlArray[splitUrlArray.length - 2]);
  }

  getFrenchEntry(localizedEntries: any[]): any {
    return localizedEntries.find(
      (flavorTextEntry: any) => flavorTextEntry.language.name === 'fr'
    );
  }

  getLocalizedEntry(localizedEntries: any[], language: any): any {
    return localizedEntries.find(
      (flavorTextEntry: any) => flavorTextEntry.language.name === language
    );
  }
}
