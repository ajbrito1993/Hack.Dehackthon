let codeDiv = $('#editor');
let output = $('#output');
let runBtn = $('#runBtn');

/*
$('#editor').keydown((event) =>{

  let code = codeDiv.html().replace(/<\/?span[^>]*>/g, "");
console.log(code)

  code.replace('console', '<span class="class">console</span>');
  code.replace('log', '<span class="method">log</span>');

  let str = code.match(/'([^']+)'|"([^"]+)"/)[0];
  code.replace(str, '<span class="quotes">'+str+'</span>');

  codeDiv.text(code)
});
*/
runBtn.click(() => {
  //let code = codeDiv.html().replace(/<\/?span[^>]*>/g, "");
  let code = codeDiv.text();
  let tokens = code.split(/"|'/g);
  
  if (tokens[0] == 'console.log(' && tokens[tokens.length-1] == ')') {
    output.text('> ' + tokens[1]);
  }
});

codeDiv.focus();
