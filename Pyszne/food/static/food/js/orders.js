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
    var cartSize = orders.length;

    orders[cartSize]= [name,size,price]
    localStorage.setItem('orders', JSON.stringify(orders));
    total = Number(total) + Number(price);
    localStorage.setItem('total', total);


    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    butto = '<button onclick="removePizza(' + cartSize + ')">Usuń</button>';
    ptotal.innerHTML = 'Razem: ' + total + ' zł';
    pcart.innerHTML += '<li>'+ name + ' ' + size + ': ' + price + ' zł' + butto + '</li>';
}

function pshoppingCart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    pcart.innerHTML = '';
    for ( let i=0; i < cartSize; i++){
        butto = '<button onclick="removePizza(' + i + ')">Usuń</button>';
        pcart.innerHTML += '<li>' + orders[i][0] + orders[i][1] + ': ' + orders[i][2] + ' zł' + butto + '</li>';

    }
    ptotal.innerHTML = 'Razem: ' + total + ' zł';
}
pshoppingCart();

function removePizza(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - orders[n][2];
    orders.splice(n,1);
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    pshoppingCart();
}