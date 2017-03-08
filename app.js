var x = prompt("1st string:");
var y = prompt("2nd string:");

x = x.toLowerCase();
y = y.toLowerCase();

x = x.replace(/\s+/g,'');
y = y.replace(/\s+/g,'');


console.log(x, y);
