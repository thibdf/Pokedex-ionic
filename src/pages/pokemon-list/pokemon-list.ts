import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

import { PokemonService } from "../../app/core/pokemon.service";
import { LanguageService } from "../../app/core/language.service";

import { PokemonDetailPage } from "../pokemon-detail/pokemon-detail";

import { translations_de } from "../../app/shared/translations.de";
import { translations_en } from "../../app/shared/translations.en";
import { translations_fr } from "../../app/shared/translations.fr";


@Component({
  selector: 'page-pokemon-list',
  templateUrl: 'pokemon-list.html',
})
export class PokemonListPage {
  
  pokemons: any[];
  searchValue: string;
  toggled: boolean;
  searchTerm: string = '';
  item: string[];
  language: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private pokemonService: PokemonService, languageService: LanguageService) {
    // Hide search and show title
    this.toggled = false;

    // Get language for searchbar
    this.language = languageService.getLanguage();

  }

  ionViewDidLoad() {
    
    this.getAllPokemons().subscribe();
  }
  
  toggleSearch() {
    
    this.toggled = this.toggled ? false : true;
  }

  filterPokemon(pokemon: any) {
    // Search result according to the app language 
    switch (this.language) {
      case 'en':
        return pokemon.id.toString().includes(this.searchValue) || translations_en.get(pokemon.name).includes(this.searchValue.toLowerCase());
      case 'fr':
        return pokemon.id.toString().includes(this.searchValue) || translations_fr.get(pokemon.name).includes(this.searchValue.toLowerCase());
      case 'de':
        return pokemon.id.toString().includes(this.searchValue) || translations_de.get(pokemon.name).includes(this.searchValue.toLowerCase());
    }
  }
  
  private getAllPokemons(): Observable<any> {
    return this.pokemonService.getAllPokemons().pipe(
      map((pokemons: any) => this.pokemons = pokemons)
    );
  }

  navigateDetails(currentId: number) {
    this.navCtrl.push(PokemonDetailPage, {
      pokemonId: currentId
    });
  }
}
