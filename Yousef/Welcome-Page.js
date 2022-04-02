document.querySelector('.userlogo').addEventListener('click', function () {
    if (document.querySelector('.user').classList.contains("active")) {
        document.querySelector('.user').classList.remove("active");
    } else{
        document.querySelector('.user').classList.add("active")
    } ;
})

let userName=localStorage.getItem("name");
document.getElementById("wlcname").innerHTML=userName;
let button3=document.querySelector("#button3")
let button2=document.querySelector("#button2")
let button1=document.querySelector("#button1")
let MyAlert=document.querySelector(".sure")
var path;
 function showMe(){
     MyAlert.classList.add("show")
 }
 button3.addEventListener("click",()=>{
    showMe();
    path=3
    window.localStorage.setItem("myPath",path)
 })
button2.addEventListener("click",()=>{
    showMe();
    path=2
    window.localStorage.setItem("myPath",path)
})
button1.addEventListener("click",()=>{
    showMe();
    path=1
    window.localStorage.setItem("myPath",path)
})



