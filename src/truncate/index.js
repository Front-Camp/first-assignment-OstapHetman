/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = "...") => {
  /* your logic here...*/
  if (str === "") {
    return false;
  } else if (length > str.length) {
    return false;
  } else {
    return str.substring(0, length - str.length) + replacer;
  }
};

export default truncate;
