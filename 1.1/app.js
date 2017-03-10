var x = prompt('1st string:');
var y = prompt('2nd string:');

function sorted(t) {
  var z = t.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
  return z;
}

(sorted(x) === sorted(y)) ? alert('YES') : alert('NO');

/*var x = prompt("1st string:");
var y = prompt("2nd string:");

x = x.replace(/\s+/g,'');
y = y.replace(/\s+/g,'');

x = x.toLowerCase();
y = y.toLowerCase();

if (x.length === y.length){
  for (var i = 0; i < x.length; i++){
  y = y.replace(x[i],'');
  }
  if (y === ''){
    alert('YES');
  } else {
    alert('NO');
  }
} else {
  alert('NO');
}*/
