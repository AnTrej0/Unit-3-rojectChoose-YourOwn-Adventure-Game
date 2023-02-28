
let title=document.querySelector(".title");

let storyOpenning=document.querySelector(".story-opening");
let buttons=document.querySelector(".buttons");
let button1=document.querySelector(".button1");
let button2=document.querySelector(".button2");
let button3=document.querySelector(".button3");
let button4=document.querySelector(".button4");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");

button1.onclick=function(){
    optionOneScreen.style.display="block";
    storyOpenning.style.display="none";
    title.innerHTML="You reported the body and the killer was caught";
};

button2.onclick=function(){
    optionTwoScreen.style.display="block";
    storyOpenning.style.display="none";
    
};

button3.onclick=function(){
    optionTwoEnd.style.display="block";
    storyOpenning.style.display="none";
    
};

button4.onclick=function(){
    optionOneEnd.style.display="block";
    storyOpenning.style.display="none";
    
};