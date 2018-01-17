import { Component, Input, SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map, mergeMap } from 'rxjs/operators';

import { PokemonService } from '../../app/core/pokemon.service';
import { TypeService } from '../../app/core/type.service';
import { UtilService } from '../../app/core/util.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

import { LanguageService } from "../../app/core/language.service";

/**
 * Generated class for the PokemonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon-detail',
  templateUrl: 'pokemon-detail.html',
})
export class PokemonDetailPage {
  id = 1;
  pokemon: any;
  pokemonSpecies: any;
  showLoader: boolean;
  types: any;
  language: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private pokemonService: PokemonService,
              private typeService: TypeService,
              public utilService: UtilService,
              private loadingCtrl: LoadingController,
              private languageService: LanguageService) {
    this.language = this.languageService.language;
    this.id = navParams.get("pokemonId"); // Get current pokemon id
    this.initData();
  }
  
  ionViewDidLoad() {
    
    console.log("id: " + this.id);
    if (!this.id) {
      this.id = 1;
    }
    
    this.initData();
    this.getData();
  }

  private getData() {
    forkJoin(
      this.getPokemon(this.id),
      this.getPokemonSpecies(this.id)
    ).pipe(
      mergeMap((args: any[]) => this.getTypes(this.pokemon.types))
      ).subscribe(() => this.showLoader = false);
  }

  private getPokemon(id: number): Observable<any> {
    return this.pokemonService.getPokemon(id).pipe(
      map((pokemon: any) => this.pokemon = pokemon)
    );
  }

  private getPokemonSpecies(id: number): Observable<any> {
    return this.pokemonService.getPokemonSpecies(id).pipe(
      map((pokemonSpecies: any) => this.pokemonSpecies = pokemonSpecies)
    );
  }

  private getTypes(typesList: any[]): Observable<any> {
    const typeObservables: Observable<any>[] = [];
    typesList.forEach((type: any) => {
      typeObservables.push(this.typeService.getType(this.utilService.getIdFromUrl(type.type.url)));
    });
    return forkJoin(typeObservables).pipe(
      map((types: any) => this.types = types)
    );
  }

  private initData() {
    this.showLoader = true;
    this.pokemon = undefined;
    this.pokemonSpecies = undefined;
    this.types = undefined;
  }

}
