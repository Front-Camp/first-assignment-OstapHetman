/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
  /* your logic here...*/
  if (
    typeof data === "string" ||
    typeof data === "number" ||
    typeof data === "object" ||
    typeof data === "undefined" ||
    typeof data === "boolean" ||
    typeof data === "null"
  ) {
    return false;
  } else {
    return true;
  }
};

export default isObject;
