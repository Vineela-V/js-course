/*
let a = 99999999;
let b = 999999999;
console.log(a);
console.log(b);

let a = 0.02 + 0.12;
let b = (0.02 * 10 + 0.12 * 10) / 10;
console.log(a);
console.log(b);

let a = 10;
let b = 20;
let c = a+b;
console.log(c);

let x = "100" / "10";
let y = "100" * "10";
let z = "100" - "10";
console.log(x);
console.log(y);
console.log(z);

let g = 0987;
console.log(g);

//length of str//
let s1 = 'abc';
console.log(s1.length);
let s2 = '';
console.log(s2.length);
let s3 = '@%^&';
console.log(s3.length);

function stringLength() {
    const str = "VineelaValeti";
    console.log("String Length: " + str.length);
}
stringLength();

const currentDate = new Date()
const currentDate_String = currentDate.toString()
console.log("Date Object's String Value: " + currentDate_String);
//using at()//
let str1 = "Welcome to my page";
let str2 = "MYPAGE";
console.log(str1.at(3));
console.log(str2.at(5));
console.log(str1.at(-7));
console.log(str2.at(-2));
//charAt() method//
function func() {
    let str = 'Javascript is OO language';
    let Value = str.charAt(0);
    let Value1 = str.charAt(5);
    console.log(Value);
    console.log(Value1);
}
func();
// includes //
let str = "Welocome to this page";
let check = str.includes("page");
console.log(check);

//indexOf()//
let str = 'Departed Train';
let index = str.indexOf('Train');
console.log('index');
// replace() //
let string = 'AllMangos';
let newstring = string.replace('AllMangos', 'Orange');
console.log(newstring);

// search() //
let str = 'SummerSeason';
let searchString = "Season";
let Result = str.search(searchString);
console.log(Result);

// reverse string using split,join,reverse// 
let s = "JavaScriptModule";
const ans = s.split('').reverse().join('');
console.log(ans);

//using spread operator//
let s = "VineelaValeti";
const ans = [...s].reverse().join("");
console.log(ans);
*/

// map() //
/*
let myMap = new Map();
let anotherMap = new Map([
    ['name', 'ABC'],
    ['age', '23'],
    ['city', 'Hyd']
]);
console.log(anotherMap);

console.log(myMap.get('name'));
console.log(myMap.get('age'));
console.log(myMap.get(1));
console.log(myMap.get('invalidkey'));

myMap.delete('age');
console.log(myMap.has('age'));
console.log(myMap);

myMap.clear();
console.log(myMap);
*/

//sorting algorthim//
/*
function bubbleSort(arr, n) {
    let swapped = false;
    for( let i =0; i < n; i++) {
        swapped = true;
        for(let j =0; j < n-i-1; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if ( swapped === false) break;
    }
    return arr;
}
let a = [2, 1, 3, 4,5];
a = bubbleSort(a, 5);
console.log(a);

//selection sort//
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));


//Insertion sort//
function InsertionSort(arr) {
    let n = arr.length;
    for (let i =1; i<n;i++) {
        let key = arr[i];
        let j = i-1;
        while( j>=0 && arr[j] > key) {
            arr [j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
let arr = [4, 7, 21, 11, 92];
console.log(InsertionSort(arr));

//weakMap//
let weakMap = new WeakMap();
let obj1 = {name: "vineela"};
let obj2 = {name: "Venela"};
weakMap.set(obj1, "Engineer");
weakMap.set(obj2, "Designer");
console.log(weakMap.get(obj1));
console.log(weakMap.get(obj2));
obj2 = null;
*/
//weakSet//
let weakSet = new WeakSet();
let obj1 = { name: "Vineela" };
let obj2 = { name: "Venels" };
weakSet.add(obj1);
weakSet.add(obj2);
weakSet.delete(obj1)
obj2=null
console.log(weakSet.has(obj1))
console.log(weakSet.has(obj2))