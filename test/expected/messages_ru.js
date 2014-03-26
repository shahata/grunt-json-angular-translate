'use strict';

try {
  angular.module('wixTranslations');
} catch (e) {
  angular.module('wixTranslations', ['pascalprecht.translate']);
}

angular.module('wixTranslations').config(function ($translateProvider) {
  $translateProvider.translations('ru', {
    'a': 'b',
    'c': {
      'y': 'e',
      'x': 'd'
    }
  });
  $translateProvider.preferredLanguage('ru');
});
