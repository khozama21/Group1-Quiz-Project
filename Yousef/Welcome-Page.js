document.querySelector('.userlogo').addEventListener('click', function () {
    if (document.querySelector('.user').classList.contains("active")) {
        document.querySelector('.user').classList.remove("active");
    } else{
        document.querySelector('.user').classList.add("active")
    } ;
})

let userName=localStorage.getItem("name");
document.getElementById("wlcname").innerHTML=userName;

let path;
let button3=document.querySelector('#button3')
button3.addEventListener('click', function () {
 path = 1
})