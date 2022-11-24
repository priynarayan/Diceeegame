//  ******************************first dice's random Number*******************************************
var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImageNum1 = "dice"+randomNumber1+".png";
var randomDiceSrc1 = "images/"+diceImageNum1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSrc1);

//  ******************************second dice's random Number*******************************************
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImageNum2 = "dice"+randomNumber2+".png";
var randomDiceSrc2 = "images/"+diceImageNum2;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSrc2);


// *****************************deciding winners ***********************************************************
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "DRAW!";
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 WINS!";
}
