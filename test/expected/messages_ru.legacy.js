'use strict';

try {
  angular.module('wixTranslations');
} catch (e) {
  angular.module('wixTranslations', ['pascalprecht.translate']);
}

angular.module('wixTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'a': 'b',
      'c': {
        'y': 'e',
        'x': 'd'
      }
    };
    $translateProvider.translations('ru', translations);
    $translateProvider.translations(translations);
  }
]);
