/*
let name = "Vineela";
alert(`hello, ${name}!`)
alert(`the result is ${2+3}`)


alert(`the result is ${2+3}`);

let isGreater = 4>1.2;
alert (isGreater);

let age = 24;
age= undefined;
alert(age);

let name = "Vinni";
alert( `hello ${1}`);
alert (`hello ${"name"}`);
alert (`hello ${name}`);

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); 

let isOwner = confirm("Are you the boss?");
alert(isOwner);

let name = prompt("What is your name?", "");
alert(name);

let value = false;
alert(typeof value);
value = String(value);
alert(typeof value);

let str = "012";
alert(typeof str);

let num = Number(str);
alert(typeof num);

alert(Number(" 123 "));
alert(Number ("123z"));
alert(Number(true));
alert(Number(true));

let x =1;
x=-x;
alert(x);

let x=1, y=8;
alert(x-y);
alert(8%3);

alert(4 ** (1/2));

let apples ="5";
let kiwis ="9";
alert(+apples + +kiwis)

let a=1;
let b=2;
let c= 5-(a=b+1)
alert(a);
alert(c);

let a,b,c;
a=b=c=2+1;
alert(a);
alert(b);
alert(c);

let n=2;
n += 5;
n *=2;
alert(n);

let a =1, b=1;
alert(++a);
alert(b++);

alert(a);
alert(b);

let a ="1";
let b ="2";
alert(a + b);

let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
         alert(1);
         break;
    case 2:
    case 3:
    case 4:
        alert( '2,3,4');
        break;
}

let str = 'hello';
alert(str.toLowerCase());

let str = "Hii";
str.test = 5;
alert(str.test);

let num = 2.3456;
alert(Math.round(num * 100) / 100);

let sum = 0.1 + 1.2;
alert( sum.toFixed(2));

var firstName = "VINEELA"
var secondLetterOfFirstName = firstName[1];
var lastName = "Lovelace";
var thridLetterofLastName = lastName;

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    return result;
}
console.log(wordBlanks("cat", "ran", "quickly"));

var myArray = [10,20,30];
var myData = myArray[2];
console.log(myData);

let recipeMap = new Map([
    ['chilli', 200],
    ['tomatoes', 350],
    ['onion', 500],
]);
for (let vegetable of recipeMap.keys()) {
    alert(vegetable);
}
for (let amount of recipeMap.values()) {
    alert(amount);
}
for (let entry of recipeMap) {
    alert(entry);
}

let map = new Map();
map.set('banana', 1);
map.set('orange',2);
map.set('apple',3);
let obj =Object.fromEntries(map.entries());
alert(obj.orange);

let set = new Set();
let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};
let jack = {name: "jack"};
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(jack);
alert(set.size);
for (let user of set) {
    alert(user.name);
}

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); 
*/

/* varible & data types */

/* var v = 30;
console.log(v);
var u = 35;
console.log(u);
*/

/* let v = 30;
 v = 25;
console.log(v);
*/

 /* const v = 30;
console.log(v);
*/

/* let v = 23;
let vi = 23.4;

let v = "Hello world!";

let bool = true;
let bool2 = false;

let name = "v";
console.log(name);
*/

/* let obj = {
    name: "Vineela",
    age: "23",
    job: "none"
};
console.log(obj);

let obj = new Object();
obj.name = "Vineela",
obj.age = "23",
obj.job = "none"
console.log(obj);


// acces objects properties using . or [] notation//
let obj = {name: "Vineela", age: 23};
console.log(obj.name); //dot //
console.log(obj["age"]); //age//
*/

// modifing object props //
/* 
let obj = { name: "Vineela", age:23};
console.log(obj);
obj.age = 24;
obj.name = "vinee";
console.log(obj);
*/
//add & remove object //
/*
let obj= {host: "Vineela"};
obj.channel = "MAATV";
delete obj.channel;
console.log(obj);


let obj = {host:"Vinnela"};
console.log("host" in obj);
console.log(obj.hasOwnProperty("host"));


let obj= {name: "Vineela", age: 23};
for (let key in obj) {
    console.log(key +": " + obj[key]);    
}
*/

// merging obj //
/* 
let obj1 = {name:"Vineela"};
let obj2 = {age: 23};
let obj3 = {job: "none"}
let obj4 = {...obj1,...obj2,...obj3};
console.log(obj4);

let obj = { name: "Vineela", age:23};
console.log(Object.keys(obj).length);
*/

//Array//
/*
let v = [];
console.log(v);
let u = [10,20,25];
console.log(u);

// creating array with new keyword//
let v = new Array(10,202,30);
console.log(v);
*/
//accesing elements of an array//
/*
let v = ["ABC", "CDE"];
let u = ["EFG", "IJK"];
console.log(v[1]);
console.log(v[0]);
console.log(u[2]);
*/

// accesing 1st & 2nd elem in array//
/*
let v =["ABC", "DEF","IJK"];
//let fst = v[ 2];//
//console.log("First Item:", fst);//
let lst = v[v.length - 1];
console.log("Last Item:", lst);
*/

// modifing array//
/*
let v = ["ABC", "DEF", "KJH"];
console.log(v);
v[1] = "NBChg";
console.log(v);
*/

// add &remove elements in array//
/*
let v = ["VScode", "React", "JS"];
v.push("HTML"); 
v.unshift("CSS");
console.log(v);

let u = ["JHG", "MNC", "OIP", "123"];
u.push("JHD");
u.unshift("hjg");
console.log(u);

let v =["JS", "Vscode", "HTML"];
console.log(v);
let lst = v.pop();
console.log(v);
let fst = v.shift();
console.log(v);
v.splice(2,0);
console.log(v);
*/
// length of array, increase and decrease array len//
 /*
let v = ["ABS", "RTC", "KJH", "POI"];
let len = v.length;
console.log("Array Length: " + len);

let u = ["ABS", "RTC", "KJH", "POI"];
u.length = 8;
console.log("After incresaing length: ", u);
u.length = 3;
console.log("After decraesing length :", u);
*/
//Iteration //
let v =["ABS", "RTC", "KJH", "POI"];
for (let i=0; i < v.length; i++) {
    console.log(v[i])
}

// array concatenation //
let u = ["ABS", "RTC", "KJH", "POI"];
let w = ["ABC", "DEF","IJK", "LKH"];
let concateArray = u.concat(w);
console.log("Concatenated Array: ", concateArray);

// convert arr to str//
/*
let a = ["ABC", "DEF","IJK"];
console.log(a.toString());

let b = ["ABC", "DEF","IJk"];
console.log(typeof b);
*/

// functions//
function sum(x, y) {
    return x + y;
}
console.log(sum(8,9));

function welcomeMsg(name) {
    return ("Hello" + name +","+ " welcome to GeeksforGeeks");
}
let nameVal = "Vineela";
console.log(welcomeMsg(nameVal));

const mul = function(x,y) {
    return x*y;
};
console.log(mul(4,5));

const add = function (a,b) {
    return a + b;
};
console.log(add(5,6));

function sayHello() {
    console.log("Hello Vinni");
}
sayHello();

//arrow funs//
/*
const addd = (a,b) => a+b;
console.log(add(8,9));

const remove = (a,b) => a -b;
console.log(remove(1000,90));

const fgh = () => {
    console.log("Hii welcome");
}
fgh();

const square = a => a*a;
console.log(square(5));

const abc = (x, y, z) => {
    console.log(x*y/z)
}
abc( 20, 10, 30);


const abc = (x,y, z=10) => {
    console.log(x + "," + y + "," + z);
}
abc( 20,30);

const personList = (firstName, lastName) => (
    {first : firstName, last: lastName});
    console.log(personList("ABC", "GFH"));

const fetchData = async() => {
    const data = await
    fetch('https://www.geeksforgeeks.org/arrow-functions-in-javascript/');
    return data.json;
};

const a = ["ABC", "MNBNN", "GFD", "OIU"];
const a1 = a.map(function (s) {
    return s.length;
});
console.log("Normal Fun", a1);
const a2 = a.map((s) => s.length);
console.log("Using Arrow fun", a2);

(function() {
    console.log("Hello World");
})();

function num(n,m, callback) {
    return callback(n,m);
}
const double = (n,m) => m*n*3;
console.log(num(3,2, double));

function pureMultiply(a,b) {
    return a*b;
}
console.log(pureMultiply(3,4));


// control flow statments//

const age = 18;
if (age>= 18 ) {
    console.log("yOU ARE AN ADULT");
}

const marks = 40;
if (marks >= 50) {
    console.log("You passed.");
} else {
    console.log("You failed.")
}

const temp = 25;
if (temp > 30) {
    console.log("It's hot.");
} else if (temp >= 25) {
    console.log("It's warm.");
} else {
    console.log("It's cold");
}
// loops//
for ( let i = 0; i <=5; i++) {
    console.log(i);
}

let i =1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
}while(j <=4);
*/

// branching statment//
function addd(a,b) {
    return a + b;
}
const res = add(5,6);
console.log(res);

for (let i = 1; i <= 5; i++) {
    if (i === 4) break;
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}