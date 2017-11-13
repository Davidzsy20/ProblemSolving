function primeSieve (start, end) {
  var res = []
function primeTester(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    }
    var count = Math.floor(n ** (0.5))
    while (count > 1) {
        if (n % count === 0) {
            return false
        }
        count--
    }
    return true
}

for (var i = start; i <= end; i++){
  if(primeTester(i)){
    res.push(i)
  }
}
return res;
}
