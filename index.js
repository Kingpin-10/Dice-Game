var randomNumber1=Math.round(Math.random()*5)+1;

var randomDiceImage= "images/dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);

var randomNumber2=Math.round(Math.random()*5)+1;

var randomDiceImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
} else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Playe 2 wins!";    
}
 else{
    document.querySelector("h1").innerHTML="Draw!";    
 }