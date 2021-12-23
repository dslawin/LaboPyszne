var pcart = document.querySelector('#pcart');
var ptotal= document.querySelector('#ptotal');



function addPizza(pid){
    pizzaId = '#piz' + pid;
    var name = document.querySelector(pizzaId).innerHTML;
    var radio ='pizza' + pid;
    var pri = document.getElementsByName(radio);
    var size, price;
    if(pri[0].checked){
        price = pri[0].value;
        size = 'Średnia';
    }
    else{
        price = pri[1].value;
        size= 'Duża';
    }
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');


    total = Number(total) + Number(price);
    ptotal.innerHTML = 'Razem: ' + total + ' zł';
    pcart.innerHTML += '<li>'+ name + ' ' + size + ': ' + price +' zł</li>';
}
