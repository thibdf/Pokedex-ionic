import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
    public language: string = 'en';
    
    private translate: TranslateService;
    
    constructor(translate: TranslateService) {

        this.translate = translate;
    }

    setupLanguage() {

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
    }

    changeLanguage(language: any) {
        
        this.language = language;
        this.translate.use(language);
    }

    getLanguage(): string {

        return this.language;
    }
}