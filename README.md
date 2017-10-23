## Express-t

I18n for Express apps.

## Locales

Add language support by placing translations into a JSON file named using the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard of two-letter language codes.

    ls -la ./config/locales
    #=> ./config/locales/en.json
    #=> ./config/locales/es.json
    #=> ./config/locales/fr.json
    #=> ...

Place configuration inside your `locale.js` initializer file.

    cat ./config/initializers/locale.js
    #=> module.exports = {
    #=>   available_locales: ['de', 'en', 'es', 'fr', 'it', 'ja', 'pt'],
    #=>   default_locale: 'en',
    #=> }

Reference translations inside your views using dotted notation.

    cat ./app/views/welcome/hello.html.ejs
    #=> <h1><%- t(locale, 'welcome.greeting') %></h1>

    cat ./config/locales/en.json
    #=>{
    #=>  "en": {
    #=>    "welcome": {
    #=>      "greeting": "Hello, friend!",
    #=>      ...

## Changelog

Get the project's history in [CHANGELOG.md](CHANGELOG.md).

## Maintainer

Andy Bettisworth <andy@accreu.com>

## License

This project is released under the [MIT License](LICENSE.txt).
