function flatten(arr) {

  var flattened = arr.reduce(function(a, b){
     return a.concat(b);
  });

  return flattened;
  
}