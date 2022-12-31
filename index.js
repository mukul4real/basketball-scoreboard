let home=0,guest=0
let guestVal=document.getElementById("guest-num"), homeVal=document.getElementById("home-num")
function home1(){
    home+=1
    homeVal.innerText=home;
}
function home2(){
    home+=2
    homeVal.innerText=home;
}
function home3(){
    home+=3
    homeVal.innerText=home;
}
function guest1(){
    guest+=1
    guestVal.innerText=guest;
}
function guest2(){
    guest+=2
    guestVal.innerText=guest;
}
function guest3(){
    guest+=3
    guestVal.innerText=guest;
}