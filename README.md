# Pokedex

It started as a school project using Angular first, then Ionic. The version here is the latter.

## Dependencies

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

```
1. $ ionic cordova build android --prod --release
2. $ keytool -genkey -v -keystore my-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
3. $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-key.jks app-unsigned.apk my-alias
4. $ zipalign -v 4 app-unsigned.apk Pokedex.apk
5. $ apksigner verify Pokedex.apk
```

See the [Ionic doc](https://ionicframework.com/docs/intro/deploying/) for more informations about deploying the app as an APK.

## License

[Pokemon Icons](https://www.flaticon.com/packs/pokemon-go) made by [Roundicons Freebies](https://www.flaticon.com/authors/roundicons-freebies) from [www.flaticon.com](https://www.flaticon.com/)

[Flag Icons](https://www.flaticon.com/packs/international-flags) made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)

License MIT
