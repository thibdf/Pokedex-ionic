import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

import { LanguageService } from "../../app/core/language.service";

import { PokemonListPage } from "../pokemon-list/pokemon-list";


@IonicPage()
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
    console.log('ionViewDidLoad LanguagePage');
  }

  changeLanguage() {
    console.log('language: ' + this.language);
    this.languageService.changeLanguage(this.language);
    this.navCtrl.setRoot(PokemonListPage);
  }
}
