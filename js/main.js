document.getElementById("yellow").onclick = partyYellow
document.getElementById('green').onclick = partyGreen
document.getElementById("black").onclick = partyBlack
document.getElementById('red').onclick = partyRed

function partyYellow(){
  document.querySelector("body").style.backgroundColor = "yellow"
  document.querySelector("body").style.color = "white"
}

function partyGreen(){
  document.querySelector("body").style.backgroundColor = "green"
  document.querySelector("body").style.color = "white"
}
function partyBlack(){
  document.querySelector("body").style.backgroundColor = "black"
  document.querySelector('body').style.color= "white"
}
function partyRed(){
  document.querySelector("body").style.backgroundColor = "red"
  document.querySelector("body").style.color = "white"
}