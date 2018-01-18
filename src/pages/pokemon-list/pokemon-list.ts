import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

import { PokemonService } from "../../app/core/pokemon.service";

import { PokemonDetailPage } from "../pokemon-detail/pokemon-detail";


@IonicPage()
@Component({
  selector: 'page-pokemon-list',
  templateUrl: 'pokemon-list.html',
})
export class PokemonListPage {
  pokemons: any[];
  searchValue: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokemonService: PokemonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonListPage');
    this.getAllPokemons().subscribe();
  }
  
  filterPokemon(pokemon: any): boolean {
    return pokemon.id.toString().includes(this.searchValue) || pokemon.name.includes(this.searchValue.toLowerCase());
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
