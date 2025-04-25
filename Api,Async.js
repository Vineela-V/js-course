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
*/

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