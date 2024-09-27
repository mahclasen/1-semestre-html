let a,b,c;
let saida = document.getElementById("saida");
a=10; // igual 
b=10; //igual 
c=11; // diferente 
saida.innerHTML="Menor = "+(a<b)+"<br>"; // false a é menor < que o b.
saida.innerHTML+="Menor ou igual = "+(a<=b)+"<br>"; // true a é menor ou igual ao b.
saida.innerHTML+="Maior = "+(c>b)+"<br>"; // true pq o c é maior > que o b 
saida.innerHTML+="Maior ou igual = "+(c>=b)+"<br>"; // true pq o c é maior ou igual ao b. 