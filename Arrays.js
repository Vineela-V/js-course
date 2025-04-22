/*
let arr = ["I", "Study","JS"];
arr.splice(1,1);
alert(arr);

let arr = ["I","Study","js","right","now"];
arr.splice(0,4, "Let's","dance");
alert(arr)

let arr = ["I", "Study","JS"];
arr.splice(2,0,"complex","language");
alert(arr);

let arr = [1,2,3];
arr.splice(-1,0,5,6);
alert(arr);

let arr = ["a", "b", "c", "d"];
alert(arr.slice(2,3));

let arr = [1,2];
alert( arr.concat([3,4]) );
alert( arr.concat([3,4], [5,6]));

["A","B","C","D"].forEach(alert);

let arr = [1,0, false];
alert( arr.indexOf(1));
alert( arr.indexOf(false));
alert( arr.indexOf(null));
alert( arr.includes(1)); 

let fruits = ["Apple","Orange","Grape"]
alert(fruits.indexOf("Orange"));
alert(fruits.lastIndexOf("Grape"));

const arr =  [NaN];
alert( arr.indexOf(NaN));
alert( arr.includes(NaN));
*/
let users = [
    {id: 1, name: "Alpha"},
    {id: 2, name: "Gama"},
    {id: 3, name: "Delta"},
    {id: 1, name: "Alpha"},
];
let user = users.find(item => item.id == 1);
alert(user.name);