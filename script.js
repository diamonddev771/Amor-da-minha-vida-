const text =
"Existem bilhões de pessoas no mundo... Mas meu coração escolheu apenas uma. ❤️";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,60);

}

}

typeWriter();

document.getElementById("startBtn")
.addEventListener("click",()=>{

document.getElementById("music").play();

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

});

const startDate = new Date("2025-07-05");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor(diff/(1000*60*60))%24;

const minutes =
Math.floor(diff/(1000*60))%60;

document.getElementById("timer").innerHTML =

`${days} dias<br>
${hours} horas<br>
${minutes} minutos ❤️`;

}

setInterval(updateTimer,1000);

updateTimer();
