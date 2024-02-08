var hora = new Date().getHours();
var msg = document.getElementById("msg");

var mensagem = ""

if(hora >= 5 && hora < 12){
mensagem = "Olá, Bom dia!"
}
else if(hora >= 12 && hora < 18){
mensagem = "Olá, Boa tarde!"
}
else{
mensagem = "Olá, Boa noite!"
}

msg.innerHTML = `<h1> ${mensagem} </h1>`



document.addEventListener('DOMContentLoaded', function() {
    var listar = document.getElementById('listar');
    var itens = listar.getElementsByTagName('li');

    var listap = document.getElementById('listap');
    var item = listap.getElementsByTagName('li');


    var dia = new Date().getDay();

    switch(dia){
        case 0: 
            itens[6].style.color = '#ffca2e';
            item[2].style.color = '#ffca2e';
            break;
        case 1: 
            itens[0].style.color = '#ffca2e';
            break;
        case 2: 
            itens[1].style.color = '#ffca2e';
            break;
        case 3: 
            itens[2].style.color = '#ffca2e';
            break;
        case 4: 
            itens[3].style.color = '#ffca2e';
            break;
        case 5: 
            itens[4].style.color = '#ffca2e';
            item[0].style.color = '#ffca2e'
            break;
        case 6: 
            itens[5].style.color = '#ffca2e';
            item[1].style.color = '#ffca2e';
            break;
        default:
            break;
    }


});