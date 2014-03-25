/*
 * grunt-json-angular-translate
 *
 *
 * Copyright (c) 2014 Shahar Talmi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    jsonAngularTranslate: {
      default_options: {
        options: {
          moduleName: 'wixTranslations'
        },
        files: [{
          expand: true,
          cwd: 'test/fixtures',
          src: '*.json',
          dest: 'tmp/test1',
          ext: '.js'
        }]
      },
      pattern_language: {
        options: {
          moduleName: 'wixTranslations',
          extractLanguage: '^..'
        },
        files: [{
          expand: true,
          cwd: 'test/fixtures',
          src: '*.json',
          dest: 'tmp/test2',
          ext: '.js'
        }]
      },
      function_language: {
        options: {
          moduleName: 'wixTranslations',
          extractLanguage: function (filepath) {
            return filepath.slice(-2);
          }
        },
        files: [{
          expand: true,
          cwd: 'test/fixtures',
          src: '*.json',
          dest: 'tmp/test3',
          ext: '.js'
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jsonAngularTranslate', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
