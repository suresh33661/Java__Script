"use strict"

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

let a = [];
for(let i =0 ; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener("click", function(){
        console.log("Button clicked");
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

btnCloseModal.addEventListener("click", function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

document.addEventListener("keydown", function(e){
    if (e.key === "Escape") {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");}
});