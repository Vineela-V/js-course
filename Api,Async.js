/*
function loadScript (src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.omload = () => callback(script);
    document.head.append(script);
}

let promise = new Promise(function(resolve, reject){
    resolve(2);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('runs after 0.1 secons'));

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); 
  }).then(function(result) {
    alert(result);   
    return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(result * 3), 1000);
    }); 
    }).then(function(result) { 
    alert(result); 
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 3), 1000);
     });
    }).then(function(result) {
    alert(result); 
});

async function f() {
    return Promise.resolve(1);
}
f().then(alert);

class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  new Waiter()
    .wait()
    .then(alert);

function walkCat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const catWalked = true;
      if(catWalked){
        resolve("Cat walked.");
      }
      else{
        reject("Cat didn't walk!");
      }
    }, 1200);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenClean = true;
      if(kitchenClean){
        resolve("Kitchen is cleaned.");
      }
      else{
        reject("Kitchen is dirty!");
      }
    }, 1200);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const takeOutTrash = true;
      if(takeOutTrash){
        resolve("Trash has taken Out.");
      }
      else{
        reject("Trash didn't taken Out!");
      }
    }, 1200);
  });
}

async function doWorks() {

  try {
    const walkCatResults = await walkCat();
    console.log(walkCatResults);
 
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
 
    const takeOutTrashResults = await takeOutTrash();
    console.log(takeOutTrashResults);
 
    console.log("You finished all the works.")
 
  }
  catch(error) {
    console.error(error);
  }
}

doWorks()

function pseudoRandom(seed) {
  let value = seed;

  return function() {
    value = value * 16807 % 2147483647;
    return value;
  }
}
let generator = pseudoRandom(1);
alert(generator()); 
alert(generator()); 
alert(generator());
*/

// callback fun //
/*
function greet( name, callback) {
  console.log("Hello" + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}
greet("Vineela", sayBye);

console.log("Start");
setTimeout(function() {
  console.log("Inside setTimeout");
}, 3000);
console.log("End");


// callbacks in fun //
function calc(a, b, callback) {
  return callback(a, b);
}
function add(x, y) {
  return x + y;
}
function mul(x, y) {
  return x * y;
}
console.log(calc(4,5, add));
console.log(calc(7,6, mul));


// callbacks in event listners//
document.getElementById("Button").addEventListener("click", function () {
  console.log("Button clicked!");
});

// callbacks in api calls//
function fetch(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => callback(data))
  .catch(error => console.error("Error:" , error));
}
function handle(data) {
  console.log("Fetched Data:", data);
}
fetch(handle);

let checkEven = new Promise((resolve, reject) =>{
  let number = 5;
  if (number % 2 === 0) resolve("The number is even!");
  else reject("The number is odd!");
});
checkEven
   .then((message) => console.log(message))
   .catch((error) => console.log(error));

// async & await in js//
async function fetchData() {
  const response = await
  fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
fetchData();

// async fun//
const getData = async() => {
  let data = "Heyy, Hello";
  return data;
}
getData().then(data => console.log(data));

//await keyword//
const getData = async () => {
   let y = await "Hello Hii";
   console.log(y);
}
console.log(1);
getData();
console.log(2);
*/

// error handling in async/await//

async function fetchData() {
  try {
    let response = await
    fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}