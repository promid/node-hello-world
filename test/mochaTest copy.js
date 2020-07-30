var assert = require('assert');

describe('User', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new User('Luna');
      user.save(done)
    });
    it('should complete this test', function (done) {
      new Promise(function (resolve) {
        assert.ok(true);
        resolve();
      }).then(done);
    });
  });
});

class User {
  constructor(name) {
    this.name = name
  }

  save = (callback) => {
    new Promise(function(resolve, reject) {
      callback()
      // resolve()
    }).then(console.log(123))
  }
}