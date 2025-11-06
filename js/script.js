function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', showText);
}


function showText() {
  var textbox = document.getElementById('entryinput');
  var headline = document.getElementById('textoutput')
  alert("Anisa McKinney: " + textoutput)   
  headline.innerHTML = textbox.value;
}




window.addEventListener('load', init);
