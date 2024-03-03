// function
function myFunction(msg){
    console.log("hello!");
    console.log(msg);
}

myFunction("i love js");

// function with return

function add(a,b){
    sum = a+b;
    console.log("before return");
    return sum;
    // console.log("after return")  // note after return statement nothing is executed
}

add(15,16); // return does not print anything in the console window

console.log(add(15,16)); 

// arrow function
(a,b) => {
    console.log(a+b);
}

 const arrowSum = (a,b) => {
    console.log(a+b);
}

console.log(arrowSum);
arrowSum(10,15);

 const arrowMul = (c,d) => {
    return c*d ;
}

console.log(arrowMul);
arrowMul(5,10);
console.log(arrowMul(5,25));


let printArrow = () => {
    console.log("i love js");
}

printArrow()


// create a funtion using the "function" keyword that takes a String as an argument & returns the number of vowels in the string
function myString(msg){
    let count = 0;
    for (let i=0;i<msg.length;i++)
          {
            if (msg[i] === "a"||msg[i] === "e"||msg[i] === "i"||msg[i] === "o"||msg[i] === "u"){            
            count++
        } 
    }
    console.log(count);
}

myString("jojomarkun");

// do the above with arrowFunction
 let countVowel = (msg) => {
    count = 0;
    for (let char of msg){
        if(char === "a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
            count++;
        }
            
        }
        console.log(count);
    }

console.log(countVowel);
countVowel("i love js") ;

// for each loop in array 

let arry = [1,2,3,4,5];

arry.forEach( function myFunction(val){
console.log(val);
}

)

{let arry1 = ["pune","gurgoan","goa","delhi","patna"];

arry1.forEach((val)=>{
    console.log(val.toUpperCase());
})}

// three optional argument in for each  value , index and array itself
let arry1 = ["pune","gurgoan","goa","delhi","patna"];

arry1.forEach((val,idx,arry1)=>{
    console.log(val,idx,arry1);
})


// For a given array of numbers, print the square of each value uisng the forEach loop.
let arrynum = [1,2,3,4,5,6,8,9];

arrynum.forEach(
    (val)=>{
        console.log(val**2);
    }
)

// ANOTHER WAY TO WRITE CALL BACK FUNTION  by defining the arrow function inside a varibale and then pass that varibale to forEach loop
let Calsqr = (val)=>{   
    console.log(val**2);
}

arrynum.forEach(Calsqr);


// ARRAY METHODS
// MAP : SAME AS forEach only difference is it returns a new array
let arrynum1 =[5,10,15,2,3,4,6];

arrynum1.map(
    (val)=> {
        console.log(val)
    }
)

let newArry = arrynum1.map(
    (val)=>{
        return val*2;
    }
)
console.log(newArry);


// FILTER METHOD : TO FILTER SOME VALUES FROM AN ARRAY BASED ON SOME CONDITION
let arry0 = [1,2,3,4,5,6,7];
let newArry0 = arry0.filter(
    (val)=>{
        return val%2 ===0          
        
    }
)


console.log(newArry0);


// REDUCE : PERFORMS SOME OPERATION & REDUCE THE ARRAY TO A SINGLE VALUE. iT RETUNES THE SINGLE VALUE
let num = [1,2,3,4,5,60,7];

newNum = num.reduceRight(
    (pre,curr)=>{
     return pre>curr? pre:curr
    }
)

console.log(newNum);











