console.log("Hellow! World");
age = 24;
console.log(age);
full_name="jyotiMarkun";
console.log(full_name);
price=12.5;
console.log(price);
x= null;
y=undefined;
console.log(x);
console.log(y);
is_follow=true;
console.log(is_follow);
fullName1="jojo";
console.log(fullName1);
// console ="harry"; // not allowed a reserved word
// console.log(console);
Console ="harry"; 
console.log(Console);

var age =24;
var age=84;  // using var keyword we can redeclare a varible which is not good so we will not use var keyword 
var age=56;
console.log(age);

let fullName ="henry";
// let fullName ="henrypeterson"; // suing let we can not redeclare the variable name
fullName="henrypeterson";  // using let we can change the value of variable
console.log(fullName);

const PI =3.14;  // we can not redefined and change the variable 
console.log(PI);

let a;
console.log(a);  // type is always unfined as we have not given any datatype

// const b;
// console.log(b);  // will through an error

console.log(typeof(fullName));
console.log(typeof(price));
console.log(typeof(PI));
console.log(typeof(is_follow));
console.log(typeof(x));  // null has object datatype in javascript (null means absence of an object)
console.log(typeof(y));

let c= BigInt("123");
console.log(c);
console.log(typeof(c));
let d = Symbol("Hellow");
console.log(d);
console.log(typeof(d));


const Student=
{
   fullName:"jerry",
    age : 24,
    marks:95,
    subject:'maths',
    isPass : true
};
Student["fullName"]="Mohan";
Student.marks=80;
console.log(Student);
console.log(typeof(Student));
// two methods to get value of a key from an object
console.log(Student["age"]);  // first method
console.log(Student.fullName); // second method
console.log(Student.marks);