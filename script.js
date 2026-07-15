const password = document.getElementById("password");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

const length = document.getElementById("length");
const lengthText = document.getElementById("lengthText");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const fill = document.getElementById("fill");
const strengthText = document.getElementById("strengthText");


function createPassword(){

let chars="";

if(upper.checked) chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(lower.checked) chars+="abcdefghijklmnopqrstuvwxyz";
if(number.checked) chars+="0123456789";
if(symbol.checked) chars+="!@#$%^&*";


let result="";


for(let i=0;i<length.value;i++){

result += chars[Math.floor(Math.random()*chars.length)];

}


password.value=result;

checkStrength(result);

}



function checkStrength(pass){

let score=0;


if(pass.length>10) score++;
if(/[A-Z]/.test(pass)) score++;
if(/[0-9]/.test(pass)) score++;
if(/[^A-Za-z0-9]/.test(pass)) score++;


if(score<=1){

strengthText.innerHTML="Schwach";
fill.style.width="25%";
fill.style.background="#ef4444";

}

else if(score<=3){

strengthText.innerHTML="Mittel";
fill.style.width="60%";
fill.style.background="#f59e0b";

}

else{

strengthText.innerHTML="Sehr Stark";
fill.style.width="100%";
fill.style.background="#22c55e";

}

}



length.oninput=()=>{

lengthText.innerHTML=length.value;

createPassword();

}



generate.onclick=createPassword;



copy.onclick=()=>{

navigator.clipboard.writeText(password.value);

copy.innerHTML="✅";

setTimeout(()=>{

copy.innerHTML="📋";

},1500);

}



createPassword();
