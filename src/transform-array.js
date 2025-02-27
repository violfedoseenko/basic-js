const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  // копируем исходный массив, так как его по условию изменять нельзя
  const newArr = arr.slice();
  newArr.forEach((element, index) => {
    switch (element) {
      case '--discard-next':
        if (newArr[index + 1]) {
          newArr.splice([index + 1], 1);
          newArr.splice(index, 1);
        } else {
          newArr.splice(index, 1);
        }
        break;
      case '--discard-prev':
        if (newArr[index - 1]) {
          newArr.splice([index - 1], 1);
          newArr.splice(index, 1);

        } else {
          newArr.splice(index, 1);
        }
        break;
      case '--double-next':
        if (newArr[index + 1]) {
          newArr.splice(index, 1, newArr[index + 1]);
        }
        else {
          newArr.splice(index, 1);
        }
        break;
      case '--double-prev':

        if (newArr[index - 1]) {
          newArr.splice(index, 1, newArr[index - 1]);
          console.log(newArr);

        }
        else {
          newArr.splice(index, 1);
        }
        break;
    }

  });
  return newArr;
}



module.exports = {
  transform
};
