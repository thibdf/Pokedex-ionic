import { NgModule } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { TypeService } from './type.service';
import { UtilService } from './util.service';
import { LanguageService } from "./language.service";

@NgModule({
  providers: [
    LanguageService,
    PokemonService, 
    TypeService, 
    UtilService
  ]
})
export class CoreModule { }
