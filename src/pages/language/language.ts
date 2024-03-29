import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LanguageService } from "../../app/core/language.service";

import { PokemonListPage } from "../pokemon-list/pokemon-list";


@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {
  language: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private languageService: LanguageService) {
    
    this.language = this.languageService.language;
  }

  ionViewDidLoad() {
    
  }

  changeLanguage() {
    
    this.languageService.changeLanguage(this.language);
    this.navCtrl.setRoot(PokemonListPage);
  }
}
