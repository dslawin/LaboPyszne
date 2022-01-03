var nazwa= document.querySelector("#nazwa");
var rozmiar= document.querySelector("#rozmiar");
var cena= document.querySelector("#cena");
var razem= document.querySelector("#total");
var usun= document.querySelector("#usun");


function shoppingCart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;

    nazwa.innerHTML = '<h3>Nazwa</h3>';
    rozmiar.innerHTML = '<h3>Rozmiar</h3>';
    cena.innerHTML = '<h3>Cena</h3>';
    usun.innerHTML = '<h3><br></br></h3>';


    for ( let i=0; i < cartSize; i++){
        usun.innerHTML += '<h4><button class="btn-danger" onclick="removeItem(' + i + ')">Usuń</button></h4>';
        nazwa.innerHTML += '<h4>' + orders[i][0] + '</h4>'
        rozmiar.innerHTML += '<h4>' + orders[i][1] + '</h4>'
        cena.innerHTML += '<h4>' + orders[i][2] + '</h4>'

    }
    razem.innerHTML = 'Razem: ' + total + ' zł';
}
shoppingCart();

function removeItem(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - orders[n][2];
    orders.splice(n,1);
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    shoppingCart();
}

var note = document.querySelector("#uwagi");

function order(){
    var msg = note.value;
    var orders = localStorage.getItem('orders')
    var ur = '/koszyk';
    var orderData = {};
    orderData['orders'] = orders;
    orderData['note']= msg;
    $.ajax({
        url: ur,
        type: "POST",
        data: orderData,
        success: function(data){
            window.location.replace('/success')

    }

    })
}