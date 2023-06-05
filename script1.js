var guess = Math.floor(Math.random()*100)+1;
function display(){
  var num =  document.getElementById('hi').value;
  if(num == guess)
    document.getElementById('out').innerText = 'Congrats! you guessed it right';
  else if(num >= guess)
    document.getElementById('out').innerText = 'Guess a lower Number';
  else
    document.getElementById('out').innerText = 'Guess a higher Number';
}