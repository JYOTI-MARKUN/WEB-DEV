// Array in js : collection of items

let marks =[65,95,85,74,36,15];
console.log(marks);
console.log(typeof(marks));

console.log(marks[3]);
console.log(marks[6]);
marks[4]=55; // this is poosible as arrays are mutubale in js
console.log(marks); 

// loops over an array
for (let i =0;i<marks.length;i++){
    console.log(i);
}

let cities =["Ambala","chandigarh","yamunanagar","gurgoan","haridwar","pune","hyderabad","jammukashmir"];

for (let city of cities){
    console.log(city.toUpperCase());
}

// for a given array with marks of studemts -> [85,97,44,37,76,60] find the average marks of the entire class
let marks1 = [85,97,44,37,76,60];
console.log(marks1); 
let sum = 0;
for (let mark of marks1)
{ 
    sum+=mark
};

console.log(`the vaerage of marks of the entire class is ${sum/marks1.length}`);


// for a given array with prices of 5 items -> [250,645,300,900,50] all items have an offer on 10% OFF on them. Change the array to store the final price after applying offer
let items =[250,645,300,600,50];
// let i = 0;
// for ( let item of items){
//     console.log(` value at index ${i} is = ${item} `);
//     let offer_price = item/10;  
//     items[i] = items[i] - offer_price;
//     console.log(`val of item after offer price is =${items[i]}`);
//     i++ 
// }

for (let i=0; i< items.length;i++){
    console.log(items[i]);
    offer = items[i]/10;
    items[i] = items[i] - offer ;
    console.log(`val of items after offer pric is = ${items[i]}`);
}

console.log(items);

// Array methods in JS
// Push(): add to end
// Pop() : delete form end and return
let fruits =["apple","banana","mango","grapes","lichi","papaya"];
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);

fruits.push("orange","strawberry");
console.log(fruits);
let pop1 = fruits.pop();
console.log(pop1);
console.log(fruits)
console.log(fruits.pop());
console.log(fruits);

let num = [15,50,30,40];
console.log(num);

console.log(num.toString());
console.log(num);


// concat :joins multiple array $ return result (create new array)
let marvel_heros = ["ironman","thor","spiderman","antman"];
let dc_heros = ["superman","batman"];
let indian_heros = ["shaktiman","krishh"]
let heros = marvel_heros.concat(dc_heros,indian_heros);
console.log(heros);

// unshift method : add in start
marvel_heros.unshift('hulk');
console.log(marvel_heros);

// shift : delete from starting
console.log(marvel_heros.shift());
console.log(marvel_heros);

// slice : returns a piece of the array (it did not change the original array, but create a new one)
marvel_heros.push("dr. strange","hulk");
console.log(marvel_heros);
console.log(marvel_heros.slice(1,3));


// splice method : change the original orray  splice(strtidx,delCount,newele)

let arry = [0,1,2,3,4,5,6,7,8,9];
console.log(arry);
arry.splice(3,2,101,105,108);
console.log(arry);

// only adding
arry.splice(2,0,102);
console.log(arry);

// only deleting
arry.splice(4,1);
console.log(arry);

// replace an element
arry.splice(4,1,3);
console.log(arry);

// NOTE SPLICE  IF WE PASS ONLY STARTING INDEX IT WILL DELETE ALL THE ELEMENT AFTER STARTING INDEX
let arry1 = [5,1,0,15,20,55,22];
console.log(arry1.splice(4));
console.log(arry1);

console.log(arry1.splice()); // []
console.log(arry1);

// create an array to store companies -> "bloomberg","microsoft","uber","google","ibm","netflix"
// A) remove the first company from the arry  B) Remove uber and add ola in its plce C) add amazone at the end
let arry0 = ["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(arry0);
console.log(arry0.shift());


console.log(arry0);
console.log(arry0.splice(1,1,"ola"));


console.log(arry0);
(arry0.push("amazone"));
console.log(arry0);


