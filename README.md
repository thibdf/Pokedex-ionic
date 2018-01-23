# Pokedex

It started as a school project using Angular first, then Ionic. The version here is the latter.

## Disclaimer

© 2018 Pokémon. © 1995–2018 Nintendo/Creatures Inc./GAME FREAK inc. Pokémon, Pokémon character names are trademarks of Nintendo. 

## Dependencies

- [Pokéapi](https://pokeapi.co/)
- [NodeJS](https://nodejs.org/en/)
- [Ionic Framework](https://ionicframework.com/)

## Installation

```
1. $ npm install
2. $ npm install -g cordova ionic (If Ionic isn't installed)
3. $ ionic serve
4. Gotta catch 'em all!
```

## Android APK

Requires [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and [Android SDK](https://developer.android.com/studio/index.html)

```
1. $ ionic cordova build android --prod --release
2. $ cd path/to/app-release-unsigned.apk (Something like: platforms/android/app/build/outputs/apk/release)
3. $ keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
4. $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk my-alias
5. $ zipalign -v 4 app-release-unsigned.apk Pokedex.apk
6. $ apksigner verify Pokedex.apk
```

See the [Ionic doc](https://ionicframework.com/docs/intro/deploying/) for more informations about deploying the app as an APK.

## License

[Pokemon Icons](https://www.flaticon.com/packs/pokemon-go) made by [Roundicons Freebies](https://www.flaticon.com/authors/roundicons-freebies) from [www.flaticon.com](https://www.flaticon.com/)

[Flag Icons](https://www.flaticon.com/packs/international-flags) made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)

License [MIT](https://github.com/ThibDuff/Pokedex/blob/master/LICENSE.md)
