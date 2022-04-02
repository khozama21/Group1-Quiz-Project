//selectors
let questions1=document.querySelectorAll(".path1 .question-container");
let questions2=document.querySelectorAll(".path2 .question-container");
let questions3=document.querySelectorAll(".path3 .question-container");
// let answer1=document.querySelector(".answer1");
// let answer2=document.querySelector(".answer2");
// let answer3=document.querySelector(".answer3");
// let answer4=document.querySelector(".answer4");
let nexButton=document.querySelector(".after");
let beforeButton=document.querySelector(".before");
let dots=document.querySelector(".dots")
let points;
let path=1;
let active=0;

//functions
function onStart(){
    if(path==1){
        document.querySelector(".path1").classList.add("show");
        document.querySelector(".path2").classList.add("hide");
        document.querySelector(".path3").classList.add("hide");
points=0;
for(i=0;i<questions1.length;i++){
questions1[i].classList.add("hide")
let myLi=document.createElement("li");
myLi.classList.add("dot")
myLi.classList.add(`dot${i+1}`)
dots.appendChild(myLi);
}
questions1[0].classList.remove("hide")
questions1[0].classList.add("show")
}else if(path==2){
    document.querySelector(".path1").classList.add("hide");
    document.querySelector(".path2").classList.add("show");
    document.querySelector(".path3").classList.add("hide");
    points=0;
for(i=0;i<questions2.length;i++){
questions2[i].classList.add("hide")
let myLi=document.createElement("li");
myLi.classList.add("dot")
myLi.classList.add(`dot${i+1}`)
dots.appendChild(myLi);
}
questions2[0].classList.remove("hide")
questions2[0].classList.add("show")
}else if(path==3){
        document.querySelector(".path1").classList.add("hide");
        document.querySelector(".path2").classList.add("hide");
        document.querySelector(".path3").classList.add("show");
        points=0;
        for(i=0;i<questions3.length;i++){
        questions3[i].classList.add("hide")
        let myLi=document.createElement("li");
        myLi.classList.add("dot")
        myLi.classList.add(`dot${i+1}`)
        dots.appendChild(myLi);
        }
        questions3[0].classList.remove("hide")
        questions3[0].classList.add("show")
    }
}


//add events
onStart();
var myAnswer = [].slice.call(questions1[0].children[1].children);
myAnswer.forEach(e => e.addEventListener("click",function(){
    for(i=0;i<myAnswer.length;i++){
        myAnswer[i].classList.remove("colorIt")
        myAnswer[i].classList.remove("selected")
    }
    this.classList.add("colorIt")
    this.classList.add("selected")
}))
//.forEach(e=>e.addEventListener("click",function(){
//     console.log(this)
// }))
// questions1[0].children[1].children[1].addEventListener("click",function(){
//     console.log("hi hi");
// },{once:true})
// questions1[1].children[1].children[0].addEventListener("click",function(){
//     console.log("hi hi");
// })
// questions1[2].children[1].children[2].addEventListener("click",function(){
//     console.log("hi hi");
// })
// questions1[3].children[1].children[0].addEventListener("click",function(){
//     console.log("hi hi");
// })
// questions1[4].children[1].children[3].addEventListener("click",function(){
//     console.log("hi hi");
// })
