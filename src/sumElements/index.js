/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  try {
    if (arr.some(NaN)) throw "Nan";
  } catch (error) {
    return error;
  }
  if (typeof arr == "string") {
    let arrOfNumbers = Number(arr);
    let num = arr.reduce((a, b) => a + b);
    return num;
  } else if (arr === NaN) {
    return (arr = 2);
  }
};

export default sumElements;
