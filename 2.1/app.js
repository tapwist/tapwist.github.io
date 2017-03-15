var num10 = prompt("Enter num");
var num2 =[];
while (num10 !== 0){
  var a = num10 % 2;
  num10 = Math.floor(num10/2);
  num2.unshift(a);
}
alert(num2.join(''));
