console.log('Hello World');
let amount = 0;
let amountPerSecond = 0;

function clicked(){
    document.getElementById("number").innerHTML = amount + 1 + 'n';
    amount = amount + 1;
}

function newManufacturer(){
    if (amount > 10) {
        document.getElementById("number").innerHTML = amount - 10 + 'n';
        amount = amount - 10;
        amountPerSecond = amountPerSecond + 1;
        document.getElementById("numberPerSecond").innerHTML = 'numberPerSecond: ' + amountPerSecond;
    }
}

setInterval(function money() {
    document.getElementById("number").innerHTML = amount + amountPerSecond + 'n';
    amount = amount + amountPerSecond;
}, 1000);