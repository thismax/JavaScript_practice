function chunkString(str, n) {
  
  var chunks = [];
  
  while (str.length > 0) {
    
    var chunk = ""
    
    for (var i = 0; i < n; i++){
      if (str[i]) chunk += str[i];
    }
    
    chunks.push(chunk);
    str = str.slice(n,str.length);
  
  }
  
  return chunks
  
}