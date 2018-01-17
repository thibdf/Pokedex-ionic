import { NgModule } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { TypeService } from './type.service';
import { UtilService } from './util.service';

@NgModule({
  providers: [
    PokemonService, 
    TypeService, 
    UtilService
  ]
})
export class CoreModule { }
