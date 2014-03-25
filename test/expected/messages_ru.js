'use strict';

angular.module('wixTranslations').config(function ($translateProvider) {
  $translateProvider.translations('ru', {
    'a': 'b',
    'c': {
      'x': 'd'
    }
  });
});
