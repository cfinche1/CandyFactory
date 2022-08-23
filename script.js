"use strict"

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("link").forEach(n =>n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function showAlert(){
    let email = document.getElementById("email-address").value;
    let first = document.getElementById("name1").value;
    let last = document.getElementById("name2").value;

    alert(first + " " + last + " has successfully entered " + email + " for updates and coupons!");
}

function shop(detail, price){
    alert(`${detail} have been placed in the cart at ${price}.`)
}

function worms(){
    const worm = "Gummy Worms";
    const wormPrice = "$5/lb";
    shop(worm, wormPrice);
}

function chews(){
    const chew = "Fruit Chews"; 
    const chewPrice = "$10/lb";
    shop(chew, chewPrice);
}

function truffles(){
    const truffle = "Chocolate Truffles";
    const trufflePrice = "4 for $10";
    shop(truffle, trufflePrice);
}

function cups(){
    const cup = "Peanut Butter Cups";
    const cupPrice = "4 for $5";
    shop(cup, cupPrice);
}

function rocks(){
    const rock = "Rock Candy";
    const rockPrice = "10 for $5";
    shop(rock, rockPrice);
}

function gum(){
    const chiclet = "Chiclet Gum";
    const chicletPrice = "$6/lb";
    shop(chiclet, chicletPrice);
}

function caramel(){
    const square = "Caramel";
    const squarePrice = "2.5oz for $9";
    shop(square, squarePrice);
}

function slices(){
    const fruit = "Fruit Slices";
    const fruitPrice = "$15/3lbs";
    shop(fruit, fruitPrice);
}

function lolli(){
    const lollipop = "Lollipops";
    const lollipopPrice = "20 for $5";
    shop(lollipop, lollipopPrice);
}

function pecans(){
    const pecan = "Candied Pecans";
    const pecanPrice = "$18/lb"
    shop(pecan, pecanPrice);
}

function peanuts(){
    const peanut = "Burnt Peanuts";
    const peanutPrice = "$6/lb";
    shop(peanut, peanutPrice);
}

function brittle(){
    const brittles = "Peanut Brittle";
    const brittlesPrice = "$7/lb";
    shop(brittles, brittlesPrice);
}

function patties(){
    const patty = "Peppermint Patties";
    const pattyPrice = "$7/lb";
    shop(patty, pattyPrice);
}

function licorice(){
    const licorices = "Black Licorice";
    const licoricesPrice = "$6/lb";
    shop(licorices, licoricesPrice);
}

function sticks(){
    const stick = "Peppermint Sticks";
    const stickPrice = "$8/lb";
    shop(stick, stickPrice);
}

function twists(){
    const twist = "Lollipop Twists";
    const twistPrice = "10 for $6";
    shop(twist, twistPrice);
}

function strawberry(){
    const strawberries = "Chocolate Strawberries";
    const strawberriesPrice = "6 for $20";
    shop(strawberries, strawberriesPrice);
}

function fudge(){
    const fudges = "Chocolate Fudge";
    const fudgesPrice = "$12/12oz";
    shop(fudges, fudgesPrice);
}

function smores(){
    const smore = "Smore Bites";
    const smorePrice = "2 for $5";
    shop(smore, smorePrice);
}

function bridge(){
    const bridges = "Bridge Mix";
    const bridgesPrice = "$9/lb";
    shop(bridges, bridgesPrice);
}

function bark(){
    const barks = "Almond Bark";
    const barksPrice = "$10/8oz";
    shop(barks, barksPrice);
}

function maple(){
    const maples = "Maple Nut";
    const maplesPrice = "$6/16oz";
    shop(maples, maplesPrice);
}

function cinnamon(){
    const cinnamons = "Cinnamon Lollipops";
    const cinnamonsPrice = "12 for $15";
    shop(cinnamons, cinnamonsPrice);
}

function rootbeer(){
    const rootbeers = "Rootbeer Candies";
    const rootbeersPrice = "$6/lb";
    shop(rootbeers, rootbeersPrice);
}

function openForm() {
    alert(document.getElementById("myForm").style.display = "block");
}

const close = document.getElementsByClassName("closebtn");
let i;


for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none";}, 600);
    }
}

function popupAlert(){
    let address = document.getElementById("popup-email").value;

    alert("Coupon code has been sent to " + address + ".")
}

const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) =>{
    star.addEventListener("click", () =>{
        starWrapper.classList.add("disabled");
        stars.forEach((otherStar, otherIdx) => {
            if (otherIdx <= clickedIdx){
                otherStar.classList.add("active");
            }
        })
    })
})

const searchClick = document.querySelector(".search-click");
const searchHide = document.querySelector(".search-hide");

searchClick.addEventListener("click", () =>{
    searchClick.classList.toggle("active");
    searchHide.classList.toggle("active");
})

function searchBar() {
    let input, filter, candy, detail, section, txtValue;

    input= document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    candy = document.getElementsByClassName("candy");
    section = document.getElementsByClassName("section");

    for (i = 0; i < candy.length; i++) {
        detail = candy[i].getElementsByClassName("detail")[0];
        txtValue = detail.textContent || detail.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            candy[i].style.display = "";
        } else {
            candy[i].style.display = "none";
        }
    }
}

