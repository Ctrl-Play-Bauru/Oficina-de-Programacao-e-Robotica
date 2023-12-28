//INTERAÇÃO DO USUÁRIO COM A PÁGINA
var btn1 = document.getElementById('oferta1'); 
var btn2 = document.getElementById('oferta2');
var btn3 = document.getElementById('oferta3');
var btn4 = document.getElementById('oferta4');
var btn5 = document.getElementById('oferta5');
var btn6 = document.getElementById('oferta6');
var btn7 = document.getElementById('oferta7');
var btn8 = document.getElementById('oferta8');
var btnReserva1 = document.getElementById('reservar_hotel1');
var btnReserva2 = document.getElementById('reservar_hotel2');
var btnReserva3 = document.getElementById('reservar_hotel3');
var btnReserva4 = document.getElementById('reservar_hotel4');
var btnReserva5 = document.getElementById('reservar_hotel5');
var btnReserva6 = document.getElementById('reservar_hotel6');
var btnReserva7 = document.getElementById('reservar_hotel7');
var btnReserva8 = document.getElementById('reservar_hotel8');
//Tela de reserva dos hotéis
var oferta1 = document.getElementById('tela_oferta1');
var oferta2 = document.getElementById('tela_oferta2');
var oferta3 = document.getElementById('tela_oferta3');
var oferta4 = document.getElementById('tela_oferta4');
var oferta5 = document.getElementById('tela_oferta5');
var oferta6 = document.getElementById('tela_oferta6');
var oferta7 = document.getElementById('tela_oferta7');
var oferta8 = document.getElementById('tela_oferta8');

btn1.onclick = function(){
    oferta1.style.display = 'inline-flex';
    oferta2.style.display = 'none';
    oferta3.style.display = 'none';
    oferta4.style.display = 'none';
    oferta5.style.display = 'none';
    oferta6.style.display = 'none';
    oferta7.style.display = 'none';
    oferta8.style.display = 'none';
}
btn2.onclick = function(){
    oferta1.style.display = 'none';
    oferta2.style.display = 'inline-flex';
    oferta3.style.display = 'none';
    oferta4.style.display = 'none';
    oferta5.style.display = 'none';
    oferta6.style.display = 'none';
    oferta7.style.display = 'none';
    oferta8.style.display = 'none';
}
btn3.onclick = function(){
    oferta1.style.display = 'none';
    oferta2.style.display = 'none';
    oferta3.style.display = 'inline-flex';
    oferta4.style.display = 'none';
    oferta5.style.display = 'none';
    oferta6.style.display = 'none';
    oferta7.style.display = 'none';
    oferta8.style.display = 'none';
}
btn4.onclick = function(){
    oferta1.style.display = 'none';
    oferta2.style.display = 'none';
    oferta3.style.display = 'none';
    oferta4.style.display = 'inline-flex';
    oferta5.style.display = 'none';
    oferta6.style.display = 'none';
    oferta7.style.display = 'none';
    oferta8.style.display = 'none';
}
btn5.onclick = function(){
    oferta1.style.display = 'none';
    oferta2.style.display = 'none';
    oferta3.style.display = 'none';
    oferta4.style.display = 'none';
    oferta5.style.display = 'inline-flex';
    oferta6.style.display = 'none';
    oferta7.style.display = 'none';
    oferta8.style.display = 'none';
}
btn6.onclick = function(){
    oferta1.style.display = 'none';
    oferta2.style.display = 'none';
    oferta3.style.display = 'none';
    oferta4.style.display = 'none';
    oferta5.style.display = 'none';
    oferta6.style.display = 'inline-flex';
    oferta7.style.display = 'none';
    oferta8.style.display = 'none';
}
btn7.onclick = function(){
    oferta1.style.display = 'none';
    oferta2.style.display = 'none';
    oferta3.style.display = 'none';
    oferta4.style.display = 'none';
    oferta5.style.display = 'none';
    oferta6.style.display = 'none';
    oferta7.style.display = 'inline-flex';
    oferta8.style.display = 'none';
}
btn8.onclick = function(){
    oferta1.style.display = 'none';
    oferta2.style.display = 'none';
    oferta3.style.display = 'none';
    oferta4.style.display = 'none';
    oferta5.style.display = 'none';
    oferta6.style.display = 'none';
    oferta7.style.display = 'none';
    oferta8.style.display = 'inline-flex';
}//Mostra sua respectiva oferta e esconde as outras

btnReserva1.onclick = function(){
    window.location.href = "confirmacao.html"
}
btnReserva2.onclick = function(){
    window.location.href = "vagasLotadas.html"
}
btnReserva3.onclick = function(){
    window.location.href = "confirmacao.html"
}
btnReserva4.onclick = function(){
    window.location.href = "vagasLotadas.html"
}
btnReserva5.onclick = function(){
    window.location.href = "vagasLotadas.html"
}
btnReserva6.onclick = function(){
    window.location.href = "confirmacao.html"
}
btnReserva7.onclick = function(){
    window.location.href = "confirmacao.html"
}
btnReserva8.onclick = function(){
    window.location.href = "vagasLotadas.html"
}