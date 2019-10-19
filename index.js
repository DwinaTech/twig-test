/**
 * 
 * @param {Object[]} mainArray - array of value > 0
 * @param { number } numOfSubArrays - positive number
 * @returns array of arrays equal to numOfSubArrays
 */
function divideToSizedArrays(mainArray, numOfSubArrays) {
  let dividedArrays = [];
  for (let index = numOfSubArrays; index > 0; index -= 1) {
      const newArray = mainArray.splice(0, Math.ceil(mainArray.length / index));      
      if (newArray.length) {
          dividedArrays.push(newArray);
      }
  }
  return dividedArrays;
}

module.exports = divideToSizedArrays;
