## express-t

Helper method for translations. It has one concern; look up translations
inside JSON-formatted locale files. By default it'll lookup files that match
`./config/locales/*.json`. For keys it uses a dotted-notation such that
`'model.posts.name'` will reference the value for a key `name` which is
a member of object `posts` which is a member of object `model`.

```json
./config/locales/en.json
{
  "en": {
    "model": {
      "posts": {
        "name": "Posts"
      }
    }
  }
}
```

## Getting started

First add `express-t` to your dependencies. Then assign the helper function
to an app local that'll be used within your views.

```bash
$ npm install express-t --save
```

```javascript
./config/application.js
const translate = require('express-t')
app.locals.t = translate
```
## Adding locales

To add language support just place translations into a JSON file named using
the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard
of two-letter language codes.

```bash
ls -la ./config/locales
#=> ./config/locales/en.json
#=> ./config/locales/es.json
#=> ./config/locales/fr.json
#=> ...
```

Place configuration inside your `locale.js` initializer file.

```bash
cat ./config/initializers/locale.js
#=> module.exports = {
#=>   available_locales: ['de', 'en', 'es', 'fr', 'it', 'ja', 'pt'],
#=>   default_locale: 'en',
#=> }
```

Reference translations inside your views using dotted notation.

```bash
cat ./app/views/welcome/hello.html.ejs
#=> <h1><%- t(locale, 'welcome.greeting') %></h1>
```

```bash
cat ./config/locales/en.json
#=>{
#=>  "en": {
#=>    "welcome": {
#=>      "greeting": "Hello, friend!",
#=>      ...
```

## Customization

Change the location of the locale files.

```javascript
const t = require('express-t')
t.locales_path = '/locales'
```

## Changelog

Get the project's history in [CHANGELOG.md](CHANGELOG.md).

## Maintainer

Andy Bettisworth <andy@accreu.com> https://andybettisworth.com

## License

This project is released under the [MIT License](LICENSE.txt).
