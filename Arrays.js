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

let users = [
    {id: 1, name: "Alpha"},
    {id: 2, name: "Gama"},
    {id: 3, name: "Delta"},
    {id: 1, name: "Alpha"},
];
let user = users.find(item => item.id == 1);
alert(user.name);

let fruits = ["Apple","Orange","Pear"];
alert( fruits.pop() );
alert( fruits);

let fruits = ["Apple","Orange","Pear"];
alert( fruits.push() );
alert( fruits);

let fruits = ["Apple","Orange","Pear"];
alert( fruits.shift() );
alert( fruits);

let fruits = ["Apple","Orange","Pear"];
alert( fruits.unshift('Apple') );
alert( fruits);

let options = {
    title: "Menu",
    height: 200,
    weight: 300
};
let {title, ... rest} = options;
alert(rest.height);
alert(rest.weight);

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  
    height: h = 200, 
    items: [item1, item2] 
  }) {
    alert( `${title} ${w} ${h}` ); 
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  showMenu(options);
  let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

let user = {name: "Vinni", years:24};
let {name, years:age, isAdmin = false} = user;
alert(name);
alert(age);
alert(isAdmin);
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

let now = new Date();
alert( now);

let date = new Date();
alert( date.getHours() );
alert(date.getUTCHours());

function getWeekDay(date) {
    let days = ['SU','MO','TU','WE','TH','FR','SA'];
    return days[date.getDay()];
}
let date = new Date(2025, 4, 23);
alert( getWeekDay(date));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month +1,0);
}
alert( getLastDayOfMonth(2024, 0));
alert( getLastDayOfMonth(2024, 1));
alert( getLastDayOfMonth(2024, 2));
*/
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  alert( getSecondsToday() );