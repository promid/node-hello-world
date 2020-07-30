'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = {
    haha: {
        greet: greet
    }
};

