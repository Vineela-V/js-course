/*
let v = 0;
while (v<3) {
    alert(v);
    v++;
}

for (let v =0; v < 3; v ++) {
    alert(v);
}

let v = 0;
for (v = 0; v < 3; v++) {
    alert(v);
}
alert(v);

let sum = 0;
while (true) {
    let value = +prompt("Enter a num", '');
    if (!value) break;
    sum += value;
}
alert( 'Sum:' + sum);

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    alert(i); 
  }

let v = 0;
while (v < 3) {
  alert( `number ${v}!` );
  v++;
}

let num;
do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
*/

let n = 10;
nextPrime:
for (let a =2; a <= n; a++) {
    for (let b =2; b < a; b++) {
        if ( a % b == 0) continue nextPrime;
    }
    alert(a);
}