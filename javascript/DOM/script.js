// console.log(window);
// window.console.log("hello");  // window object is global so we do not need to write it
// console.dir(document.body);
// console.dir(document.body.childNodes[1]);
// document.body.childNodes[1].innerText = "hellow";

// let heading = document.getElementById("heading");

// console.log(heading);

// let heading2 = document.getElementsByClassName("heading2");
// console.log(heading2);

// let paras = document.getElementsByTagName("p");
// console.dir(paras   );

// let firstele = document.querySelector("p");
// console.dir(firstele);


// let allele = document.querySelectorAll("p");
// console.dir(allele);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("p");
// console.dir(heading);

// let heading2 = document.querySelector("h2");
// console.dir(heading2.innerText);
// heading2.innerText = heading2.innerText + " from apna college student "

let divbox = document.querySelectorAll(".box");
idx = 0;
for (div of divbox){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
    


