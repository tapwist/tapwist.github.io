var a = [[1], [2, 3], [4]];
var b = a.reduce(function(c,d){
  return c.concat(d);
});
alert(b);
