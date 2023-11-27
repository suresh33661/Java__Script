"use strict"

let secrectnumber = Math.floor(Math.random() * 20) + 1;

let z = document.querySelector(".number").textContent = secrectnumber;
 console.log(z);       
let score = 20;
let highscore = document.querySelector(".highscore span")

let check = document.querySelector(".check");
 let another = check.addEventListener("click",function(){
    const guessvalue = Number(document.querySelector(".guess").value);
    console.log(guessvalue,typeof guessvalue);
   
    if (!guessvalue || isNaN(guessvalue)) {
        document.querySelector(".message").textContent = "⛔ No Number!";
    }
    else if ( guessvalue === secrectnumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        let body = document.querySelector("html");
        body.style.backgroundColor = "#707070";
        document.querySelector(".message").style.fontweight = "bold";
        document.querySelector(".message").style.size = "20px";
        document.querySelector(".number").textContent = secrectnumber;
        if(score > highscore.textContent) {
            highscore.textContent = score;
        }
        

    }
    else if ( guessvalue > secrectnumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "📈 Too High!";
        score -= 1;
        document.querySelector(".score span").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score span").textContent = 0;
        }
    }
    else if ( guessvalue < secrectnumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "📉 Too Low!";
        score -= 1;
        document.querySelector(".score span").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score span").textContent = 0;
        }
    }
    
    
});

let again = document.querySelector(".again");
again.addEventListener("click",function(){
    secrectnumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score span").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    let body = document.querySelector("html");
    body.style.backgroundColor = "#3B3B3B";
    document.querySelector(".message").style.fontweight = "normal";
    document.querySelector(".message").style.size = "initial";


});

document.querySelector("html").style.backgroundColor = "#3B3B3B";