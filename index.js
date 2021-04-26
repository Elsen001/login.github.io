var loginPage = document.getElementById("loginpage");
var cont = document.querySelector(".cont");
var container = document.querySelector(".container");

loginPage.addEventListener("click",function(e){

    container.style.transform="translateX(-400%)"
    cont.style.transform="translateX(0)"


    e.preventDefault()
})

var signinpage=document.querySelector("#signinpage");

signinpage.addEventListener("click",function(e){

    container.style.transform="translateX(0)"
    cont.style.transform="translateX(-400%)"

e.preventDefault()
})