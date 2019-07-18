_.map = _.collect = function(obj, interatee, context) {
  iteratee = cb(iteratee, context);
  var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      results = Array(length);
  for(var index =0;index< length;index++) {
    var currentKey = keys? keys[index]: index;
    results[index] = iteratee(obj[currentKey], currentKey, obj)
  }
  return results;
}