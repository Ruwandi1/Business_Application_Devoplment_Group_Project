let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
let
 btnSubmit=document.getElementById("submit");
btnSubmit.addEventListener("click",submit);

function submit(){
    event.preventDefault();//prevents page from reloading
    console.log("Cardholder Name:",document.getElementById("name").value);
    console.log("Card No:",document.getElementById("no").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("Expiration Date",document.getElementById("exp").value);
    console.log("CVV / CVC:",document.getElementById("cvc").value);
    let amount=document.querySelector("input[name='amount']:checked").value;
console.log("Amount :"+amount);
}



let amount = document.querySelectorAll("input[name='amount']");

for (let i = 0; i < amount.length; i++) {
    amount[i].addEventListener("change", checkAmount);
}



function checkAmount() {
    if (this.value == "100") {
        console.log("Donation 100 LKR");
    }
    else if (this.value == "250") {
        console.log("Donation 250 LKR");
    }
    else if (this.value == "500") {
        console.log("Donation 500 LKR");
    }
    else if (this.value == "1000") {
        console.log("Donation 1000 LKR");
    }
    else if (this.value == "2500") {
        console.log("Donation 2500 LKR");
    }
    else if (this.value == "5000") {
        console.log("Donation 5000 LKR");
    }
    else {
        console.log("Donation 10000 LKR");
    }
}

function myFunction() {

    let crdnumber = document.getElementById("no").value
    if (crdnumber == "")
    {
        alert("Incomplete Attempt Please Try Again.");
    }
    else{
        alert("Success!! Thank You For Your Donation.")
    }
  }
  
let btnSubmit1=document.getElementById("submit1");
btnSubmit1.addEventListener("click",submit1);

function submit1(){
    event.preventDefault();//prevents page from reloading
    console.log("Cardholder Name:",document.getElementById("cardholder").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("Card Number:",document.getElementById("cardnumber").value);
    console.log("Valid Through",document.getElementById("date").value);
    console.log("CVV / CVC:",document.getElementById("verification").value);
    console.log("Address:",document.getElementById("address").value);


    let delivery =document.querySelector("input[name='delivery']:checked").value;
    console.log("Delivery:"+delivery);
}


function myFunctiona() {

    let crdnumber = document.getElementById("cardnumber").value
    if (crdnumber == "")
    {
        alert("Incomplete Attempt Please Try Again.");
    }
    else{
        alert("Success!! Thank You For Shopping With Us.")
    }
  }

  