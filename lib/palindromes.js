function isPalindrome(s) {

  var stringForward = s.replace(/\s/g, "");
  var stringReverse = stringForward.split("").reverse().join("");
  return stringForward == stringReverse;
}



module.exports = isPalindrome;
