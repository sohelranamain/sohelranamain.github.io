//audio play function....
function playAudio() {
  document.getElementById("myAudio").play();
};
//Navbar modify section....
var First = document.querySelector(".one");
var Second = document.querySelector(".two");
var Third = document.querySelector(".three");
var Fourth = document.querySelector(".four");

First.addEventListener("mouseover", function() {
  First.innerHTML= "[BIO]";
});
Second.addEventListener("mouseover", function() {
  Second.innerHTML= "[RESULT]";
});
Third.addEventListener("mouseover", function() {
  Third.innerHTML= "[AWARD]";
});
Fourth.addEventListener("mouseover", function() {
  Fourth.innerHTML= "[BOND]";
});
First.addEventListener("mouseout", function(){
  First.innerHTML= "About";
});
Second.addEventListener("mouseout", function(){
  Second.innerHTML= "Education";
});
Third.addEventListener("mouseout", function(){
  Third.innerHTML= "Overview";
});
Fourth.addEventListener("mouseout", function(){
  Fourth.innerHTML= "Contact";
});
//display bio section....
function myAbout(){
  document.querySelector("#bio-section").style.display = 'block';
  document.querySelector("#result-section").style.display = 'none';
  document.querySelector("#award-section").style.display = 'none';
  document.querySelector("#contact-section").style.display = 'none';
  document.querySelector(".myself").style.display = 'none';
  document.querySelector(".navbar-brand").innerHTML = "Home";
  First.style.textShadow = "2px 2px 5px red";
  First.style.opacity = "1.0";
  Second.style.textShadow = "none";
  Second.style.opacity = "0.7";
  Third.style.textShadow = "none";
  Third.style.opacity = "0.7";
  Fourth.style.textShadow = "none";
  Fourth.style.opacity = "0.7";
}
//display home section....
function myHome(){
  document.querySelector("#bio-section").style.display = 'none';
  document.querySelector("#result-section").style.display = 'none';
  document.querySelector("#award-section").style.display = 'none';
  document.querySelector("#contact-section").style.display = 'none';
  document.querySelector(".myself").style.display = 'block';
  document.querySelector(".navbar-brand").innerHTML = "Sohel Rana";
  First.style.textShadow = "none";
  First.style.opacity = "0.7";
  Second.style.textShadow = "none";
  Second.style.opacity = "0.7";
  Third.style.textShadow = "none";
  Third.style.opacity = "0.7";
  Fourth.style.textShadow = "none";
  Fourth.style.opacity = "0.7";
}
//display result section....
function myResult(){
  document.querySelector("#bio-section").style.display = 'none';
  document.querySelector("#result-section").style.display = 'block';
  document.querySelector("#award-section").style.display = 'none';
  document.querySelector("#contact-section").style.display = 'none';
  document.querySelector(".myself").style.display = 'none';
  document.querySelector(".navbar-brand").innerHTML = "Home";
  First.style.textShadow = "none";
  First.style.opacity = "0.7";
  Second.style.textShadow = "2px 2px 5px red";
  Second.style.opacity = "1.0";
  Third.style.textShadow = "none";
  Third.style.opacity = "0.7";
  Fourth.style.textShadow = "none";
  Fourth.style.opacity = "0.7";
}
//display award section....
function myAward(){
  document.querySelector("#bio-section").style.display = 'none';
  document.querySelector("#result-section").style.display = 'none';
  document.querySelector("#award-section").style.display = 'block';
  document.querySelector("#contact-section").style.display = 'none';
  document.querySelector(".myself").style.display = 'none';
  document.querySelector(".navbar-brand").innerHTML = "Home";
  First.style.textShadow = "none";
  First.style.opacity = "0.7";
  Second.style.textShadow = "none";
  Second.style.opacity = "0.7";
  Third.style.textShadow = "2px 2px 5px red";
  Third.style.opacity = "1.0";
  Fourth.style.textShadow = "none";
  Fourth.style.opacity = "0.7";
}
//display contact section....
function contactMe(){
  document.querySelector("#bio-section").style.display = 'none';
  document.querySelector("#result-section").style.display = 'none';
  document.querySelector("#award-section").style.display = 'none';
  document.querySelector("#contact-section").style.display = 'block';
  document.querySelector(".myself").style.display = 'none';
  document.querySelector(".navbar-brand").innerHTML = "Home";
  First.style.textShadow = "none";
  First.style.opacity = "0.7";
  Second.style.textShadow = "none";
  Second.style.opacity = "0.7";
  Third.style.textShadow = "none";
  Third.style.opacity = "0.7";
  Fourth.style.textShadow = "2px 2px 5px red";
  Fourth.style.opacity = "1.0";
}
