import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PokemonListPage } from "../pokemon-list/pokemon-list";

@IonicPage()
@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html',
})
export class PokedexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  goToPokedex() {
    this.navCtrl.setRoot(PokemonListPage);
  }

}
