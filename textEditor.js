let codeDiv = $('#editor>code');

codeDiv.bind('keydown', function(event) {
  //console.log(event.keyCode);
  switch(event.keyCode){
     //....your actions for the keys .....
  }
});

codeDiv.focus();

let code = codeDiv.html().replace(/<\/?span[^>]*>/g,"");

console.log(code);
