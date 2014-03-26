# grunt-json-angular-translate [![Build Status](https://travis-ci.org/shahata/grunt-json-angular-translate.svg?branch=master)](https://travis-ci.org/shahata/grunt-json-angular-translate)

> Converts json files to angular translate config javascript files.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-angular-translate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-angular-translate');
```

## The "jsonAngularTranslate" task

### Overview
In your project's Gruntfile, add a section named `jsonAngularTranslate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsonAngularTranslate: {
    options: {
      moduleName: 'translations',
      extractLanguage: '..(?=\\.[^.]*$)'
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.moduleName
Type: `String`
Default value: `translations`

The module name to use in the `angular.module` calls.

#### options.extractLanguage
Type: `String|Function`
Default value: `..(?=\\.[^.]*$)` (last two characters before the last dot)

A regular expression string or a function that returns the processed file's language according to its file path.

### Usage Examples

#### Default Options
In this example, we convert all .json files in `app/scripts/locale` to angular-translate config files in `.tmp/scripts/locale`.

```js
grunt.initConfig({
  jsonAngularTranslate: {
    jobName: {
      options: {},
      files: [{
        expand: true,
        cwd: 'app/scripts/locale',
        src: '*.json',
        dest: '.tmp/scripts/locale',
        ext: '.js'
      }]
    }
  },
})
```

So `app/scripts/locale/messages_ru.js` with contents `{"key1": "value1", "key2.subKey1": "value2", "key2.subKey2": "value3"}` will be converted to `.tmp/scripts/locale/messages_ru.js` with contents:

```js
'use strict';

try {
  angular.module('translations');
} catch (e) {
  angular.module('translations', ['pascalprecht.translate']);
}

angular.module('translations').config(function ($translateProvider) {
  $translateProvider.translations('ru', {
    'key1': 'value1',
    'key2': {
      'subKey1': 'value2',
      'subKey2': 'value3'
    }
  });
  $translateProvider.preferredLanguage('ru');
});
```

#### Custom Options
In this example, we convert all .json files in `app/scripts/locale` to angular-translate config files in `.tmp/scripts/locale` with custom `moduleName`. Thanks to the custom `extractLanguage` file's language code will be extracted from the first two characters in the file name, so filepath `app/scripts/locale/he_messages.json` will get language code `he`.

```js
grunt.initConfig({
  jsonAngularTranslate: {
    jobName: {
      options: {
        moduleName: 'myAppTranslations',
        extractLanguage: function (filepath) {
          return filepath.split('/').reverse()[0].slice(2);
        }
      },
      files: [{
        expand: true,
        cwd: 'app/scripts/locale',
        src: '*.json',
        dest: '.tmp/scripts/locale',
        ext: '.js'
      }]
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Shahar Talmi. Licensed under the MIT license.
