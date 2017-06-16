// given a string, return an array of the two longest words

function twoLongest(input_string) {
  
  var words = input_string.split(' ')
  
  var sorted_words =  words.sort(function(a,b) {
    return b.length - a.length
  })
  
  return sorted_words.slice(0,2)
  
}