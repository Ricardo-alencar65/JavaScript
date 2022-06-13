function gritar() {
    alert("ahhhhhhhhhhhhhhhhhh")
}
function perguntar(){
    var nome;
    nome = prompt("Qual é o seu nome? ");
    alert("Olá " + nome);
}
function mudar_texto(){
    var h1 = document.getElementsByTagName("h1");

    if(h1[0].innerText == "Geek university"){
        h1[0].innerText = "Evolua sue lado geek!";
    }
    else{
        h1[0].innerText = "Geek university";
    }
}
function incrementar(){
    var p1 = document.getElementById("p1");

    p1.innerText = parseInt(p1.innerText) + 1;
}