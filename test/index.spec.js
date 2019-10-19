'use strict';
const divideToSizedArrays = require('../index.js');
var expect = require('chai').expect;

describe('divideToSizedArrays() test cases',() => {
    it('should return an array has two equaled size arrays and third one its size is one',() => {
        expect(divideToSizedArrays([1,2,3,4,5], 3)).to.deep.equal([[1,2], [3,4], [5]]);
    });
    it('should new array divided into 3 arrays',() => {
        expect(divideToSizedArrays([1,2,3,4], 3)).to.deep.equal([[1,2], [3], [4]]);
    });
});
