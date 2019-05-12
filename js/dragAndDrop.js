$(document).ready(()=>{
  $('#steps').sortable({connectWith: '#algorithm'});
  $('#algorithm').sortable({dropOnEmpty: false});
  main();
});

function main(){
  let steps = $('#steps');
  let items = ['Wake up', 'Brush teeth', 'Take a shower', 'get dressed', 'break fast', 'take bus'];

  shuffle(items);

  items.forEach(element => {
    steps.append(`<li class="list-group-item">${element}</li>`);
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}
