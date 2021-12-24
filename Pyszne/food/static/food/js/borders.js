var bcart = document.querySelector('#bcart');
var btotal= document.querySelector('#btotal');

function addBurger(bid){
    burgerId = '#bur' + bid;
    var name = document.querySelector(burgerId).innerHTML;
    var radio ='burger' + bid;
    var pri = document.getElementsByName(radio);
    var size, price;
    if(pri[0].checked){
        price = pri[0].value;
        size = 'Średnia';
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


    btotal.innerHTML = 'Razem: ' + total + ' zł';
    bcart.innerHTML += '<li>'+ name + ' ' + size + ': ' + price +' zł</li>';
}

function bshoppingCart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    bcart.innerHTML = '';
    for ( let i=0; i < cartSize; i++){
        bcart.innerHTML += '<li>' + orders[i][0] + orders[i][1] + ': ' + orders[i][2] + ' zł</li>';
    }
    btotal.innerHTML = 'Razem: ' + total + ' zł';
}
bshoppingCart();