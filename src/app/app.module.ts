import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CachingInterceptor } from "./caching-interceptor.service";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoreModule } from './core/core.module';
import { SharedModule } from "./shared/shared.module";

import { PokedexPage } from "../pages/pokedex/pokedex";
import { PokemonListPage } from "../pages/pokemon-list/pokemon-list";
import { PokemonDetailPage } from "../pages/pokemon-detail/pokemon-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PokedexPage,
    PokemonListPage,
    PokemonDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PokedexPage,
    PokemonListPage,
    PokemonDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true,
    }
  ]
})
export class AppModule {}
