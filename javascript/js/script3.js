// Strings in JS
let str = "jyotiMarkun";
let str2 ='jerry';

console.log(str);


// to calculate the length of a string
console.log(str.length);
console.log(str2.length);
console.log(str[5]);
console.log(str[0]);

// template literals in js : a way to have embedded expression in strings
let special_str =`This is a template literal`;
console.log(special_str);
console.log(special_str.length);
console.log(typeof(special_str));
console.log(special_str[3]);

let obj ={
    item :"pen",
    price:20,
}

console.log("the price of ",obj.item,"is",obj.price);

// using template  literal
// string interpolation : to create string by doing substitution of placeholders
console.log(`the price of ${obj.item} is ${obj.price}`)

str3 =`hello! my name is jyotiMarkun\nand i am learning js`;  //  note escape charatcter sequence has only 1 character
console.log(str3.length); // \n counts as one string

// string methods in js :built in methods to manuplate a sring
// TO UPPERCASE A STRING  : js strings are immutable every time we chnage someting in string a new string is created
let name = "krishn";
console.log(name);
console.log(name.toUpperCase());  // its a new string

// TO LOWERCASE A STRING
console.log(name.toLowerCase());

// trim method  :remove white spaces from starting and ending of a string
let str4 = "          jyoti markun          ";
console.log(str4);
let newstr4 = str4.trim();
console.log(newstr4);

// slice  : return part of a string
// str.slice(start,end?)
let str5 ="hellow world";
console.log(str5.slice(1,8));

// concatenate
let str0 ="harry";
let str00 ="potter";
let result = str0.concat(str00);
console.log(result);

console.log(str0+str00);

// replace and replaceAll method
console.log(str0.replace("h","j"));
console.log(str00.replaceAll("t","l"));


// charAt 
console.log(str00.charAt(4));

