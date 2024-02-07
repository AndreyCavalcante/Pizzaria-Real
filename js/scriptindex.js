$(document).ready(function(){
$('.navbar-nav a').on('click', function(){
    $('#navbarToggleBtn').click();
});
});

var hora = new Date().getHours();
var msg = document.getElementById("msg");

var mensagem = ""

if(hora >= 5 && hora <12){
    mensagem = "Olá, Bom dia!"
}
else if(hora >= 12 && hora < 18){
    mensagem = "Olá, Boa tarde"
}
else{
    mensagem = "Olá, Boa noite"
}

msg.innerHTML = `<h1> ${mensagem} </h1>`