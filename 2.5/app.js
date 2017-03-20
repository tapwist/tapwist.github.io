/*function sum(a){
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
alert(sum(1)(2)(-4)(5));*/

function sum(a) {
  return function (b) {
    return arguments.length === 0 ? a : sum(a + b);
  }
}
console.log(sum(1)());
