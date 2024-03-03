
// let para = document.querySelector("p");
// console.log(para);
// console.log(para.setAttribute("id","identity"));

// let id =document.querySelector("div");
// console.log(id);
// console.log(id.getAttribute("id"));

// id.style.backgroundColor = "red"
// id.style.fontSize = "20px"

// id.style.visibility = "hidden"

let newpara = document.createElement("p");
newpara = 'this is new paragraph';
console.dir(newpara);

document.querySelector("div").append(newpara);

let button = document.createElement("button");
button = 'click me!';
console.dir(button);

document.querySelector("div").prepend(button);

document.querySelector("p").after(button);
document.querySelector("div").before(button);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new </i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("#three");
para.remove();

newHeading.remove();





