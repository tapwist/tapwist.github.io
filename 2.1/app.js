function convert(num10) {  
  var num2 =[];
  while (num10 !== 0){
    var a = num10 % 2;
    num10 = Math.floor(num10/2);
    num2.unshift(a);
  }
  return num2.join('');
}
alert(convert(2));
