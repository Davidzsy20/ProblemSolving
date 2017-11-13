 function firstNonRepeatedCharacter (string) {
  var obj  = {};
  if(string=== undefined) {
    return 'sorry'
  }
  for(var i = 0; i<string.length; i++) {
     if(!obj[string[i]]) {
       obj[string[i]] = 1;
       
     }
     else{
       obj[string[i]]++;
     }
     }
  var arr = Object.keys(obj);
  
  for(var j = 0; j<arr.length; j++) {
    if(obj[arr[j]]===1) {
      return arr[j]
    }
  }
  
  return 'sorry'
}
