/*
let userName = "baaz mann";
let phoneNumber = "123-233-23233";
let fullName = "baazzy mann ";
let firstName;
let lastName;

console.log(userName.length);l
let firstletter = userName.charAt(0);
console.log(userName.indexOf("a"));
console.log(firstletter);



phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);

let userName = "baaz";

let letter = userName.charAt(0).toUpperCase();
console.log(letter);


let age = 65;

if(age<18)
{
    window.alert("go away kid!");
}
else if(age<0){
    window.alert("you havent even born yet");
}
else{
    window.alert("Wsg dawg")
}


let online =false;

if(online){
    console.log("you are online");
}
else{
    console.log("you are offline");
}


    document.getElementById("mybtn").onclick = () => {
    const mycheckbox = document.getElementById("mycheckbox");    
    if(  document.getElementById("mycheckbox").checked == true){
      console.log("You are subbed");
    }
    else{
        console.log("You are not subbed");
    }


    const visabtn = document.getElementById("visabtn");
    const mastercardbtn = document.getElementById("mastercardbtn");
    const upibtn = document.getElementById("upibtn");

    if(visabtn.checked){
        console.log("You are paying via visa!");
    }

    else if(mastercardbtn.checked){
        console.log("You are paying via mastercard");
    }

    else if(upibtn.checked){
        console.log("You are paying via upi!");
    }
    else{
        console.log("you must select a payment method!");
    }

}

let grade = "A";

    switch(grade){

        case "A":
            console.log("You did great!");
            break;

        case "B":
            console.log("You did good");
            break;

        case "C":
            console.log("You barely passed");
            break;

        case "D":
            console.log("You failed");
            break;

        default:
            console.log("This is not a letter grade");
            break;

    }


    let temp;

    if(temp > 0 && temp < 15){
        console.log("The weather is good!");
    }

    else{
        console.log("The weather is bad");
    }



    let temp = 10;
    let sunny = true;

    if(temp > 0 || temp <= 30 && sunny){
        console.log("the weather is good");
    }
    else{
        console.log("The weather is bad");
    }


    let temp = 15;
    let sunny = true;

    if(!(temp > 0)){
        console.log("Its warm outside");
    }
    else{
        console.log("Its not warm outside");
    }

    if(!sunny){
        console.log("its not sunny outside");
    }

    else{
        console.log("Its sunny outside")
    }


    let username = "";

    while(username == "" || username == null){
        username = window.prompt("Enter your name:")
    }

    console.log("Hello, ", username);

    

    do{
        username = window.prompt("Enter your name");
    }while(username == "")

    console.log("Hey", username);
    
    
    for(let i = 1; i <=20; i+=1){
        if(i == 13){
            continue;
        }
        console.log(i);
    }


   let symbol = window.prompt("Enter a symbol to use");
    let rows = window.prompt("Enter the number of rows:");
    let columns = window.prompt("Enter the number of columns:");

    for(let i = 1; i <=rows; i+=1){
        for(let j = 1; j <=columns; j+=1){
            document.getElementById("myrectangle").innerHTML += symbol;
        }
       document.getElementById("myrectangle").innerHTML += "<br>";
    }

    

 

    const startprog = () => {
        
    let username = "baaz";  
    let age = 18;

    happybirthday(username, age);


    }


    const happybirthday = (username, age) => {
        console.log("happy birthday",username, "birthday");
        console.log("happy birthday, you turned ",  age, "today");
        console.log("god bless you");
        console.log("happy birthday happy birthday");
    }

    startprog();
    
    let area;
    let width;
    let height;

    width = window.prompt("Enter width:");
    height = window.prompt("Enter height:");

    
    getArea = (width,height) => {
        let result = width * height;
        return result;
    }


    area = getArea(width,height);
    console.log("The area is ", area);



    const checkwinner = (win) =>{
        win ? console.log("You won") : console.log("You lose");
    }

    checkwinner(true);

    

   let username = "baaz";
   let items = 2;
   let total = 1200;
   let text = `hello ${username} you have ${items} items in your cart
   Your total is ${total}`;

   document.getElementById("mylbl").innerHTML = text;

   

    let mynum = 123456.789;

    mynum = mynum.toLocaleString("en-US", {style : "currency", currency: "USD"});
    console.log(mynum);

    mynum = mynum.toLocaleString(undefined, {style: "unit", unit: "celsius"});



    const answer = Math.floor(Math.random() * 10 + 1);
    let guesses = 0;

    document.getElementById("submitbtn").onclick = function() {
        let guess = document.getElementById("guess").value
        guesses +=1;

        if(guess == answer){
            alert(`${answer} is the number. it took you ${guesses} guesses`);
        }
        else if(guess < answer){
            alert("The number is too small");
        }
        else{
            alert("The number is too big");
        }
    }

    */

// document.getElementById("submitbtn").onclick = function(){
//     let giventemp = document.getElementById("textbox").value;
//     giventemp = Number(giventemp);

//     if(cbutton.checked){
//         result = (giventemp - 32) * (5/9);
//         document.getElementById("resultemp").innerHTML = result;
//     }

//     else{
//         result = (giventemp * 9 /5) + 32;
//         document.getElementById("resultemp").innerHTML = result;
//     }

// }

//Arrays

// let fruits = ["apple", "mango", "coconut"];

// fruits[1] = "banana";
// fruits.push("honey"); //adds a last element
// fruits.pop(); // removes last element
// fruits.unshift("mango"); //adds element in front
// fruits.shift(); //removes element from beginning
// console.log(fruits);

// let length = fruits.length;
// let index = fruits.indexOf("mango");

// console.log(index);
/*
let prices = [5, 10, 15, 20];

for (let i = 0; i < prices.length; i += 1) {
  console.log(prices[i]);
}


for (let price of prices) {
  console.log(price);
}

let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort(); //sorts in alphabetical order
fruits = fruits.sort().reverse(); //sorts in reverse order

for (let fruit of fruits) {
  console.log(fruit);
}


// 2D arrays

let fruits = ["apples", "oranges", "bananas"];

let vegetables = ["carrots", "onions", "potatoes"];

let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[0][0] = "mangoes";
groceryList[0][2] = "steak";

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
}


//Spread Operator
let username = "Baaz Mann";
console.log(...username);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);
console.log(...numbers);

let class1 = ["spongebob", "patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);

console.log(class1);


//Rest parameters
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(a, b, c, d, e));


//Callback

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("mylbl").innerHTML = output;
}

function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
}

sum(2, 3, displayConsole);


// array.forEach()

let students = ["spongebob", "patrick", "squidward"];

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
  console.log(element);
}

students.forEach(capitalize);
students.forEach(print);


//array.map

let numbers = [1, 2, 3, 4, 5];

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

let squares = numbers.map(square);
let cubes = numbers.map(cube);
console.log(squares);
console.log(cubes);


//Array filter

let ages = [18, 16, 21, 17, 20, 23];
let adults = ages.filter(checkAge);
adults.forEach(print);
function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}


//array.reduce() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

function checkOut(total, element) {
  return total + element;
}

console.log(total);

let grades = [100, 50, 90, 60, 80, 70];
grades = grades.sort(descendingSort);
grades.forEach(print);

function descendingSort(x, y) {
  return y - x;
}

function ascendingSort(x, y) {
  return x - y;
}

function print(element) {
  console.log(element);
}

let count = 0;

document.getElementById("increasebtn").onclick = function () {
  count += 1;
  document.getElementById("mylbl").innerHTML = count;
  console.log("increased");
};

document.getElementById("decreasebtn").onclick = function () {
  count -= 1;
  document.getElementById("mylbl").innerHTML = count;
  console.log("decreased");
};


//arrow function

// const greeting = (userName) => {
//   console.log(`Hello, how are you ${userName}`);
// };

// greeting("baaz");

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => {
  return y - x;
});

grades.forEach((element) => {
  console.log(element);
});

*/

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

cards.forEach((card) => console.log(card));
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}
