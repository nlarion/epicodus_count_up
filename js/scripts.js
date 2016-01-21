var typeChecker = function(iterative, max){
  if(typeof(iterative) !== "number" || typeof(max) !== "number"){
    return false;
  } else if(iterative > max){
    return false;
  }

};

var numberOfLoops = function(numerator,denominator){
  var ret = denominator/numerator;
  ret = Math.floor(ret);
  return ret;
}
