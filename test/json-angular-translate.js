'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.jsonAngularTranslate = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test1/messages_ru.js');
    var expected = grunt.file.read('test/expected/messages_ru.js');
    test.equal(actual, expected, 'should use last two letters before last dot as language by default.');

    test.done();
  },
  pattern_language: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test2/messages_ru.js');
    var expected = grunt.file.read('test/expected/messages_ru.js').replace('\'ru\'', '\'te\'');
    test.equal(actual, expected, 'should be able to override language matching with my own pattern');

    test.done();
  },
  function_language: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test3/messages_ru.js');
    var expected = grunt.file.read('test/expected/messages_ru.js').replace('\'ru\'', '\'on\'');
    test.equal(actual, expected, 'should be able to override language matching with my own function');

    test.done();
  }
};
