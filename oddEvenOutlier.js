function detectOutlierValue(number_string) {
  
  var numbers = number_string.split(" ");
  var evens = [];
  var odds = [];
  
  for (var i = 0 ; i < numbers.length; i++) {
    numbers[i]%2 === 0 ? evens.push(numbers[i]) : odds.push(numbers[i]) ;
  }
  
  return evens.length > 1 ? numbers.indexOf(odds[0]) + 1 : numbers.indexOf(evens[0]) + 1 ;
  
}