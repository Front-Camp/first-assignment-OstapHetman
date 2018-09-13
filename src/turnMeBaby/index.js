/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  try {
    if (typeof str !== "string") throw "this is not a string";
  } catch (error) {
    return error;
  }
  if (str === "" || str === undefined) {
    return false;
  } else {
    let splitStr = str.split(" ");

    let arrReverse = splitStr.reverse();

    let joinArr = arrReverse.join(" ");

    return (str = joinArr);
  }
};

export default turnMeBaby;
