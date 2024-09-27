let a,b,c,d,e;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=(a<=b) ? "Verdadeiro" : "Falso"; // true ( A é menor que B)
e=(a>=c) ? "Verdadeiro" : "Falso";// false ( A é menor que C)
f=(a%2==0)?"PAR":"IMPAR";
saida.innerHTML=`d = ${d}<br>`;
saida.innerHTML+=`e = ${e}<br>`;
saida.innerHTML+=` a = ${a}  é ${f}`;