
let mark= Number(window.localStorage.getItem("points"))
// console.log(mark)

if (mark>=10){
    document.getElementById('msg1').style.display="block"
    document.getElementById('mark2').innerHTML+=mark + ' / 20'
    document.getElementById('mark2').style.color='green'
    document.getElementById('markimg').src='images/pass.png'
}
else{
    document.getElementById('msg2').style.display="block"
    document.getElementById('mark2').innerHTML+=mark + ' / 20'
    document.getElementById('mark2').style.color='red'
    document.getElementById('markimg').src='images/fail.png'
}