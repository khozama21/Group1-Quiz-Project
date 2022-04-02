//selectors
let questions1=document.querySelectorAll(".path1 .question-container");
let questions2=document.querySelectorAll(".path2 .question-container");
let questions3=document.querySelectorAll(".path3 .question-container");
let nexButton=document.querySelector(".after");
let beforeButton=document.querySelector(".before");
let dots=document.querySelector(".dots")
let points=0;
let path=1;
let active=0;
var myAnswer;
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
questions1[active].classList.remove("hide")
questions1[active].classList.add("show")
myAnswer = [].slice.call(questions1[active].children[1].children);
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
    dots.children[active].classList.add("active-dot");
}
function addActive(){
if(path==1 || path==2){
if(active==4){
    active=0
}else{active++}}
if(path==3){
    if(active==9){
        active=0
    }else{active++}
}
}
function decreaseActive(){
    if(path==1 || path==2){
    if(active==0){
        active=4
    }else{active--}}
    if(path==3){
        if(active==0){
            active=9
        }else{active--}
    }
    }
function activePage(){
       if(path==1){
           for(i=0;i<questions1.length;i++){
           questions1[i].classList.remove("show")
           questions1[i].classList.add("hide")
           dots.children[i].classList.remove("active-dot")
        }
        questions1[active].classList.add("show")
        questions1[active].classList.remove("hide")
        myAnswer = [].slice.call(questions1[active].children[1].children);
        myRefresh()
        dots.children[active].classList.add("active-dot");
   }else if(path==2){
    console.log("22")
   }
 }
function selectedLi(){
    active=myLis.indexOf(this)
    activePage()
}
//add events
onStart();
function myRefresh(){
myAnswer.forEach(e => e.addEventListener("click",function(){
    for(i=0;i<myAnswer.length;i++){
        myAnswer[i].classList.remove("colorIt")
        myAnswer[i].classList.remove("selected")
    }
    this.classList.add("colorIt")
    this.classList.add("selected")
    dots.children[active].classList.add("answered-dot")
}));
}
myRefresh()
nexButton.addEventListener("click",()=>{
addActive()
activePage()
})
beforeButton.addEventListener("click",()=>{
    decreaseActive()
    activePage()
    })
    let myLis = [].slice.call(dots.children);
    myLis.forEach(ele=>ele.addEventListener("click",selectedLi))