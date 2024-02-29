// We are given an array of marks studens. Filter out of the students that scored 90+.
let marks =[35,40,45,48,55,95,90,85,92,98,97];

let highestmarks = marks.filter(
    (val)=>{
     return val>90
})

console.log(highestmarks);


// take number n as input from user. Create an array of umbers from 1 to n
let num = prompt("Enter a number");
let array =[]
for (let i =1;i<=num;i++){
     array.push(i);
}

console.log(array);
// use reduce metgod to calculate sum of all the numbers in the array
let sumOfArray = array.reduce((pre,curr)=>{
      return pre +curr
})

console.log(sumOfArray);
// use the reduuce method to calculate product of all the numbers in the array
let productOfArray = array.reduce((pre,curr)=>{
    return pre * curr
})

console.log(productOfArray);

