/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

function detectOutlierValue(number_string) {
  
  var numbers = number_string.split(" ");
  var evens = [];
  var odds = [];
  
  for (var i = 0 ; i < numbers.length; i++) {
    numbers[i]%2 === 0 ? evens.push(numbers[i]) : odds.push(numbers[i]) ;
  }
  
  return evens.length > 1 ? numbers.indexOf(odds[0]) + 1 : numbers.indexOf(evens[0]) + 1 ;
  
}