function counter() {
  var value = 0;
  return function() {
    return value++;
  };
}

for (var i = 0; i < 10; i++) {
  var x = counter(); 
  setTimeout(function() {
   console.log(x());
  }, 1000);
}

/*setTimeout(function(){
  for (var i = 0; i < 10; i++){
    console.log(i);
  }
}, 1000);*/
