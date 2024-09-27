let a,b,c,d;
let saida = document.getElementById("saida");
a=50; // inteiro
b=120; // inteiro
c=200; // inteiro 
d=(a<=b) && (a<=c);// (A é menor que B) && (A é menor que C) 
saida.innerHTML=`AND d = ${d}`; // true
