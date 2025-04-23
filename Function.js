/* 
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n -1);
    }
}
alert( pow(2,4))

let company = {
    sales: [{name: 'Jhon', salary: 1000}, {name:'Mary', salary: 2000}],
    development: {
        sites: [{name: 'Peter', salary: 3000}, {name: 'Ale', salary: 1600}],
        internals: [{name:'Jack', salary: 1200}]
    }
};
function sumSalaries(depatment) {
    if(Array.isArray(depatment)) {
        return depatment.reduce((prev, current) => prev + current.salary, 0);
    } else {
      let sum = 0;
      for (let subdep of Object.values(depatment)) {
        sum += sumSalaries(subdep);
      }
      return sum;
    }
}
alert(sumSalaries(company));

function sumTo(n) {
    return n * (n+1) / 2;
}
alert( sumTo(100));

function factorial(n) {
    return n ? n * factorial(n-1) : 1;
}
alert( factorial(6));

function fib(n) {
    return n<= 1 ? n : fib(n-1) + fib(n -2);
}
alert( fib(3));
alert( fib(7));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    alert(list.value);
    if (list.value) {
        printList(list.next);
    }
}
printList(list);

function getFunc() {
    let value ='test';
    let func = function() {alert(value); };
    return func;
}
getFunc()();

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
alert( sumAll(1));
alert( sumAll(1, 2));
alert( sumAll(1, 2,3 ));

function showName(firstName, lastName, ...titles) {
    alert( firstName + '' + lastName);
    alert( titles[0] );
    alert( titles[1] );
    alert( titles.length);
}
showName("Show", "Jhon", "Casle");

let arr = [4,6,2];
alert( Math.max(...arr));

let arr1 = [3, 7, 0, -1];
let arr2 = [8, 3, -5, 9];
alert(Math.max(1, ...arr1,2, ...arr2))

let arr1 = [1,2,3];
let arr2 = [5,9,0];
let arr3 = [7,0,4];
let merged = [0, ...arr1, 2, arr2];
alert(merged);

let arr = [1,2,3];
let arrCopy = [...arr];
alert(JSON.stringify(arr) === JSON.stringify(arrCopy));
alert(arr === arrCopy);
arr.push(4);
alert(arr);
alert(arrCopy);

function sum(a) {
    return function(b) {
        return a + b;
    };
}
alert( sum(1)(2) );
alert( sum(5)(-1));

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}
let arr = [1, 2, 3,4, 5, 6,7,8];
alert( arr.filter(inArray([1,2,10])));

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;
alert( rabbit.eats );
alert( rabbit.jumps );
*/
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __porto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __porto__: table
};
let pockets = {
    money: 2000,
    __porto__: bed
};
alert( pockets.pen);
alert( bed.glasses);
alert( table.money);