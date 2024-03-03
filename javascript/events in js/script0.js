let button = document.querySelector(".btn");
let currMode = "light";
let body = document.querySelector("body");


button.addEventListener("click",()=>{
   if (currMode === "light"){
    currMode = "dark";
   body.classList.add("dark")
   body.classList.remove("light")
   }else{
    currMode = "light";
    body.classList.add("light")
    body.classList.remove("dark")
   }
   console.log(currMode);
});

