'use strict';

try {
  angular.module('wixTranslations');
} catch (e) {
  angular.module('wixTranslations', ['pascalprecht.translate']);
}

angular.module('wixTranslations').config(function ($translateProvider) {
  $translateProvider.translations('ru', {
    'a': 'b',
    'c.x': 'd',
    'c.y': 'e'
  });
  $translateProvider.preferredLanguage('ru');
});
