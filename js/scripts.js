var typeChecker = function(iterator, max){
  if(typeof(iterator) !== "number" || typeof(max) !== "number"){
    return false;
  } else if(iterator > max){
    return false;
  }

};

var numberOfLoops = function(numerator,denominator){
  var ret = denominator/numerator;
  ret = Math.floor(ret);
  return ret;
};

var countBy = function(iterator, max){
  var curr = 0;
  var result = [];
  while(curr+iterator <= max){
    curr += iterator;
    result.push(curr);
  }
  console.log(result.join(", "));
};
