import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from "@angular/core";
import { MenuController } from "ionic-angular";

import { LanguageService } from "../app/core/language.service";

import { PokedexPage } from "../pages/pokedex/pokedex";
import { PokemonListPage } from "../pages/pokemon-list/pokemon-list";
import { LanguagePage } from "../pages/language/language";
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav;

  rootPage:any = PokedexPage;

  pages: Array<{ title: string, icon: string, component: any }>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, languageService: LanguageService) {
 
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();

      languageService.setupLanguage();
    });

    // List of pages in the menu
    this.pages = [
      { title: 'HOME', icon: 'home', component: PokedexPage },
      { title: 'LIST', icon: 'list-box', component: PokemonListPage },
      { title: 'LANGUAGE', icon: 'globe', component: LanguagePage },
      { title: 'ABOUT', icon: 'information-circle', component: AboutPage }
    ];
    
  }

  openPage(page) {
    
    this.nav.setRoot(page.component);
  }

}
