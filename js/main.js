const priceCar_0 = 8000;
const priceCar_1 = 7500;
const priceCar_2 = 7000;
const priceCar_t = 2000;
const priceSUV_0 = 9000;
const priceSUV_1 = 8500;
const priceSUV_2 = 8000;
const priceSUV_t = 3000;
const priceBlack_0 = 10000;
const priceBlack_1 = 9500;
const priceBlack_2 = 9000;
const priceBlack_t = 3500;
var grabCar = document.getElementById('grabCar');
var grabSUV = document.getElementById('grabSUV');
var grabBlack = document.getElementById('grabBlack');
var distance = document.getElementById('distance');
var waitTime = document.getElementById('waitTime');
var btnPay = document.getElementById('btnPay');
var btnPrint = document.getElementById('btnPrint');
var divPay = document.getElementById('divThanhTien');
var payElmt = document.getElementById('xuatTien');
var level_0 = document.getElementsByClassName('level_0');
var level_1 = document.getElementsByClassName('level_1');
var level_2 = document.getElementsByClassName('level_2');
var time = document.getElementsByClassName('time');
var total = document.getElementById('total');

var money = 0;
function grabPayment(){
    if(grabCar.checked){
        money = parseInt(priceCar_0) + parseInt(waitTime.value/3) * priceCar_t;
        level_0[0].innerHTML = priceCar_0;
        level_0[1].innerHTML = priceCar_0;
        time[0].innerHTML = parseInt(waitTime.value/3);
        time[1].innerHTML = priceCar_t;
        time[2].innerHTML = parseInt(waitTime.value/3) * priceCar_t;
        if(distance.value > 1 && distance.value <= 19){
            money += priceCar_1*parseInt(distance.value - 1);
            level_1[0].innerHTML = distance.value - 1;
            level_1[1].innerHTML = priceCar_1;
            level_1[2].innerHTML = priceCar_1*parseInt(distance.value - 1);
        }
        if(distance.value > 19){
            money += priceCar_1*18 + priceCar_2*parseInt(distance.value - 19);
            level_1[0].innerHTML = 18;
            level_1[1].innerHTML = priceCar_1;
            level_1[2].innerHTML = priceCar_1*18;
            level_2[0].innerHTML = distance.value - 19;
            level_2[1].innerHTML = priceCar_2;
            level_2[2].innerHTML = priceCar_2*parseInt(distance.value - 19);
        }
        total.innerHTML = money;

    }
    else if(grabSUV.checked){
        money = parseInt(priceSUV_0) + parseInt(waitTime.value/3) * priceSUV_t;
        level_0[0].innerHTML = priceSUV_0;
        level_0[1].innerHTML = priceSUV_0;
        time[0].innerHTML = parseInt(waitTime.value/3);
        time[1].innerHTML = priceSUV_t;
        time[2].innerHTML = parseInt(waitTime.value/3) * priceSUV_t;
        if(distance.value > 1 && distance.value <= 19){
            money += priceSUV_1*parseInt(distance.value - 1);
            level_1[0].innerHTML = distance.value - 1;
            level_1[1].innerHTML = priceSUV_1;
            level_1[2].innerHTML = priceSUV_1*parseInt(distance.value - 1);
        }
        if(distance.value > 19){
            money += priceSUV_1*18 + priceSUV_2*parseInt(distance.value - 19);
            level_1[0].innerHTML = 18;
            level_1[1].innerHTML = priceSUV_1;
            level_1[2].innerHTML = priceSUV_1*18;
            level_2[0].innerHTML = distance.value - 19;
            level_2[1].innerHTML = priceSUV_2;
            level_2[2].innerHTML = priceSUV_2*parseInt(distance.value - 19);
        }
        total.innerHTML = money;
    }
    else {
        money = parseInt(priceBlack_0) + parseInt(waitTime.value/3) * priceBlack_t;
        level_0[0].innerHTML = priceBlack_0;
        level_0[1].innerHTML = priceBlack_0;
        time[0].innerHTML = parseInt(waitTime.value/3);
        time[1].innerHTML = priceBlack_t;
        time[2].innerHTML = parseInt(waitTime.value/3) * priceBlack_t;
        if(distance.value > 1 && distance.value <= 19){
            money += priceBlack_1*parseInt(distance.value - 1);
            level_1[0].innerHTML = distance.value - 1;
            level_1[1].innerHTML = priceBlack_1;
            level_1[2].innerHTML = priceBlack_1*parseInt(distance.value - 1);
        }
        if(distance.value > 19){
            money += priceBlack_1*18 + priceBlack_2*parseInt(distance.value - 19);
            level_1[0].innerHTML = 18;
            level_1[1].innerHTML = priceBlack_1;
            level_1[2].innerHTML = priceBlack_1*18;
            level_2[0].innerHTML = distance.value - 19;
            level_2[1].innerHTML = priceBlack_2;
            level_2[2].innerHTML = priceBlack_2*parseInt(distance.value - 19);
        }
        total.innerHTML = money;
    }
    payElmt.innerHTML = money;
    divPay.style.display = 'block';
}
btnPay.addEventListener('click', grabPayment);
