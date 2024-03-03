let button1 = document.querySelector("#btn1");
// button1.onclick = (e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     console.log("button was pressed twice");
//     let a = 25
//     a++
//     console.log(a);
// }

let divel = document.querySelector("div");  // this is the exaample of adding event in js
divel.onmouseover = (evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    console.log("You are inside div");
}

// example of add and remove Event listner (we always use this)

button1.addEventListener("click",(e)=>{
    console.log("press the button-handel1")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
});

let handeler2 = ()=>{
    console.log("press the button-handel2")
}; 

button1.addEventListener("click",handeler2);

button1.addEventListener("click",()=>{
    console.log("press the button-handel3")
});

button1.addEventListener("click",()=>{
    console.log("press the button-handel4")
});


// to remove a event listner
button1.removeEventListener("click",handeler2);