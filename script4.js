let a,b;
let saida = document.getElementById("saida");
a=10;//   a = 10 inteiro
b="10";// b = 10 string
saida.innerHTML="Igualdade = "+(a==b)+"<br>";//true
saida.innerHTML+="Idêntico = "+(a===b)+"<br>";//false
saida.innerHTML+="Não igual = "+(a!=b)+"<br>";
saida.innerHTML+="Não Idêntico = "+(a!==b)+"<br>";