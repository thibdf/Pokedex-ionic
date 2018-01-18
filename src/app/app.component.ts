import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from "@angular/core";
import { MenuController } from "ionic-angular";

import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from "../app/core/language.service";

import { PokedexPage } from "../pages/pokedex/pokedex";
import { PokemonListPage } from "../pages/pokemon-list/pokemon-list";
import { LanguagePage } from "../pages/language/language";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav;

  rootPage:any = PokedexPage;

  pages: Array<{ title: string, component: any }>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, languageService: LanguageService) {
 
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();

      languageService.setupLanguage();
    });

    // List of pages in the menu
    this.pages = [
      { title: 'HOME', component: PokedexPage },
      { title: 'LIST', component: PokemonListPage },
      { title: 'LANGUAGE', component: LanguagePage }
    ];
    
  }

  openPage(page) {
    
    this.nav.setRoot(page.component);
  }

}
