let a,b,c,d;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=(a>=b) || (a<=c); // (A não é maior que o B) || (A é menor que o C) 
saida.innerHTML=`OR d = ${d}`; // true 
