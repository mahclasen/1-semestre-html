let a,b,res;
let saida = document.getElementById("saida");
a=9;
b=10;
res=(a<b);
saida.innerHTML=`a = ${a} , b = ${b} <br>`; // a = 9 , b = 10
saida.innerHTML+=`a < b : ${(a<b)} <br>`; // true = A  é menor que o B
saida.innerHTML+=`!( a < b) : ${!(a<b)}<br>`; // false = ! significa not ou nao, entao se torna falsa.
saida.innerHTML+="res : "+typeof(res); // boolean,number ou string 