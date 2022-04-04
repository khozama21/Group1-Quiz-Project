let a = (JSON.parse(window.localStorage.getItem("allWrong")))

let email=localStorage.getItem("email");
let pass=localStorage.getItem("pw");
let name1=localStorage.getItem("name")
localStorage.clear();

localStorage.setItem("email",email)
localStorage.setItem("pw",pass)
localStorage.setItem("name",name1)
