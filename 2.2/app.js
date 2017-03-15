var a = prompt('первый массив').split(', ');
var b = prompt('второй массив').split(', ');
var c = [];
for (var i = 0; i < a.length; i++){
  var index = b.indexOf(a[i]);
  if (index >= 0) c.push(a[i]);
}
console.log(a, b);
alert(c);
