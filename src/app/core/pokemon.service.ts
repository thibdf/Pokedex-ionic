import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UtilService } from './util.service';

@Injectable()
export class PokemonService {
  private endpoint = 'pokemon';

  constructor(private http: HttpClient, private utilService: UtilService) {
  }

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/${this.endpoint}/?limit=151`).pipe(
      map((pokemons) => pokemons.results.map((pokemon: any) => {
        pokemon.id = this.utilService.getIdFromUrl(pokemon.url);
        return pokemon;
      }))
    );
  }

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/${this.endpoint}/${id}`);
  }

  getPokemonSpecies(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/${this.endpoint}-species/${id}`);
  }

}
