// ARITHMETIC OPERATOR
// let a = 5;
// let b =2;
// console.log("a = ",a ,"& b = ",b);
// console.log("a + b = ", a + b );
// console.log("a - b = ", a - b );
// console.log("a * b = ", a * b );
// console.log("a / b = ", a / b );
// console.log("a ** b = ", a ** b );
// console.log("a % b = ", a % b );


// UNARY OPEARTOR
// let a = 5;
// let b =2;
// console.log("a = ",a ,"& b = ",b);

// a++;// a= a+1 // 6
// console.log("a = ",a); //6

// b--;// b= b-1 // 1
// console.log("b = ",b); //1


// console.log("b++ = ",b++); //2
// console.log("b = ",b)  // 3 this is an example of post increment

// ++b; //3
// console.log("b = ",b); // pre increment


// console.log("a-- = ",a--); //5
// console.log("a = ",a)  // 6this is an example of post increment

// --a; //7
// console.log("a = ",a); // 7  pre increment

// ASSIGNMENT OPEARTOR
// let a = 5;
// let b =12;
// let c = 2;
// let d = 3;
// let e = 5;
// let f =4;
// console.log("a = ",a ," b = ",b ,"c = ",c ,"d = ", d,"e = ",e, "f = ",f);
// a += 4; // a = a + 4

// console.log("a+=4 = ", a); //9

// b -= 2;
// console.log("b-=2 = ", b); //10

// c *= 5;
// console.log("c *= 5 = ",c); //10

// d /= 2;
// console.log("d /= 2 =",d); //1.5

// e %= 2;
// console.log("e %= 2 = ",e); //1

// f **=3;
// console.log("f **=3 =",f);

// COMPARISON OPERATOR

// let a = 10;
// let b = 12;
// let c = "10";

// console.log("a = ",a,"b = ",b,"c = ",c);

// console.log("a == b", a == b);  // false
// console.log("a != b", a != b);  // true
// console.log("a == c", a == c); // true
// console.log("a === c", a != c);  // false  
// console.log("a !== c", a != c);   //true

// console.log("a > b",a>b); // false
// console.log("a < b",a<b);  // true
// console.log("a >= b",a>=b); // false
// console.log("a <= b",a<=b);  // true


// LOGICAL OPERATOR

let a = 10;
let b = 2;

let cond1 = a > b;
let cond2 = a === "10";

console.log("cond1 = ",cond1, "cond2 =",cond2);
console.log("cond1 && cond2 ", cond1 && cond2 );

console.log("cond1 && cond2 ", cond1 || cond2 );

console.log("cond1 = ",!(cond1));


// alert("hellow");

// let name = prompt("hellow");
// console.log(name);


// let num = prompt("Enter a number");
// console.log(num);
// if (num % 5 === 0){
//     console.log(num,"number is a multiple  of  5");
// }
// else {
//     console.log(num,"Number is not a multuple of 5");}


let number = prompt("Enter your grade");

if (number >= 90  &&  number <=100){
    console.log("you got grade A");
} else if (number >= 70  &&  number <=89){
    console.log("You got grade B");
}else if (number >= 60  &&  number <=69){
    console.log("You got grade c");
} else if (number >= 50  &&  number <=59){
    console.log("You got grade d");
} else {
    console.log("you are failed")
}