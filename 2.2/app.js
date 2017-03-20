/*var a = prompt('первый массив').split(', ');
var b = prompt('второй массив').split(', ');
var c = [];
for (var i = 0; i < a.length; i++){
  var index = b.indexOf(a[i]);
  if (index >= 0) c.push(a[i]);
}
console.log(a, b);
alert(c);*/

function intersection(set1, set2) {
  var temp = {};
  set1.forEach(function(item){
    temp[item] = true;
  });
  return set2.filter(function(item) {
    return temp[item];
  })
}
console.log(intersection([1, 3, 5, 7, 9],[1,2,3,4]));
