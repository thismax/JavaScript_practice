// Given a mixed array w/ strings and numbers, return the longest string if the length of the string is larger than any number present in the array.  Else, return the largest number.

function largestOrLongest (mixedArray) {
  
  var strings = []
  var numbers = []
  
  for (var i = 0 ; i < mixedArray.length ; i ++) {
    
    if (mixedArray[i].constructor === String) {
      strings.push(mixedArray[i]);
    } else if (mixedArray[i].constructor === Number) {
      numbers.push(mixedArray[i]);
    }
    
  }
  
  var maxNum = Math.max.apply(null,numbers)
  
  var sortedStrings = strings.sort(function(a,b) {
    return b.length - a.length;
  })
  
  return maxNum >= sortedStrings[0].length ? maxNum : sortedStrings[0];
  
}