function search(array, value) {
  
  var low_index = 0;
  var high_index = array.length - 1;
  var midpoint = 0;
  var current_element = 0;
  
  while (low_index <= high_index) {
    
    midpoint = Math.floor((low_index+high_index)/2) // this is done to avoid fractional indicies 
    current_element = array[midpoint];
    
    if (current_element < value) {
      low_index = midpoint + 1;
    } else if (current_element > value) {
      high_index = midpoint - 1;
    } else {
      return midpoint; 
    }
    
  }
  
  return null;
  
}