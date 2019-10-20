const divideToSizedArrays = require("../index.js");
const expect = require("chai").expect;

describe("divideToSizedArrays() test cases", () => {
  it("should return an array has two equaled size arrays and third one has difference size", () => {
    const firstExpected = divideToSizedArrays([1, 2, 3, 4, 5], 3);
    const firstResult = [[1, 2], [3, 4], [5]];
    expect(firstExpected).to.deep.equal(firstResult);

    const secondExpect = divideToSizedArrays([1, 2, 3, 4], 3);
    const secondResult = [[1, 2], [3], [4]];
    expect(secondExpect).to.deep.equal(secondResult);

    const thirdExpect = divideToSizedArrays([1, 2, 3, 4, 5, 6, 7, 8], 3);
    const thirdResult = [[1, 2, 3], [4, 5, 6], [7, 8]];
    expect(thirdExpect).to.deep.equal(thirdResult);

    const fourExpect = divideToSizedArrays([1, 2, 3, 4, 5, 6, 7], 3);
    const fourResult = [[1, 2, 3], [4, 5], [6, 7]];
    expect(fourExpect).to.deep.equal(fourResult);
  });

  it("should return an array has two equaled size arrays", () => {
    const expected = divideToSizedArrays([1, 2], 3);
    const result = [[1], [2]];
    expect(expected).to.deep.equal(result);
  });

  it("should return an array has one array", () => {
    const expected = divideToSizedArrays([1], 3);
    const result = [[1]];
    expect(expected).to.deep.equal(result);
  });

  it("should return an empty array", () => {
    const expected = divideToSizedArrays([], 3);
    const result = [];
    expect(expected).to.deep.equal(result);
  });

  it("should return an array has three equaled size arrays and third one has difference size", () => {
    const expected = divideToSizedArrays([1, 2, 3, 4, 5, 6, 7], 4);
    const result = [[1, 2], [3, 4], [5, 6], [7]];
    expect(expected).to.deep.equal(result);

  });

  it('should return an array has four sub arrays each two equaled size', () => {
    const expected = divideToSizedArrays([1, 2, 3, 4, 5, 6], 4);
    const result = [[1, 2], [3, 4], [5], [6]];
    expect(expected).to.deep.equal(result);
  })

  it('should return an array has three sub arrays equaled size and third one has difference size', () => {
    const expected = divideToSizedArrays([1, 2, 3, 4, 5], 4);
    const result = [[1, 2], [3], [4], [5]];
    expect(expected).to.deep.equal(result);
  })

  it('should return an array has three sub arrays equaled size', () => {
    const expected = divideToSizedArrays([1, 2, 3], 4);
    const result = [[1], [2], [3]];
    expect(expected).to.deep.equal(result);
  })

  it('should return an array has six sub arrays equaled size and other two have difference size', () => {
    const expected = divideToSizedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
    const result = [[1, 2], [3, 4], [5], [6], [7], [8], [9], [10]];
    expect(expected).to.deep.equal(result);
  })

  it('should return an array has seven sub arrays equaled size and eight one has difference size', () => {
    const expected = divideToSizedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);
    const result = [[1, 2], [3], [4], [5], [6], [7], [8], [9]];
    expect(expected).to.deep.equal(result);
  })
});
