function sum(a){
  var current = a;
  function next(b){
    current += b;
    return next;
  }
  next.toString = function() {
    return current;
  };
  return next;
}
alert(sum(1)(2)(-4)(5));
