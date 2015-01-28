'use strict';

try {
  angular.module('wixTranslations');
} catch (e) {
  angular.module('wixTranslations', ['pascalprecht.translate']);
}

angular.module('wixTranslations').config(function ($translateProvider) {
  var translations = {
    'a': 'b',
    'c.x': 'd',
    'c.y': 'e'
  };
  $translateProvider.translations('ru', translations);
  $translateProvider.translations(translations);
  $translateProvider.preferredLanguage('ru');
});
