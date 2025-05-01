/*
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}
let user = new User("Vinni");
user.sayHi();

function makeClass(thing) {
    return class{
        sayHi() {
            alert(thing);
        }
    };
}
let user = makeClass("Hii");
new user().sayHi();

class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("Viini");
  alert(user.name); 
  
  user = new User("");
  class User {
    name = prompt("Name, please?", "Vinni");
  }
  let user = new User();
  alert(user.name);
  class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
 */
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  v() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
let p1 = new Person("Vineela", 23);
p1.v();

//using constructor//
class car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  v() {
    console.log(`${this.make} ${this.year} ${this.model}`);
  }
}
let my = new car("KIA", "Cobra", 2025);
my.v();

// Inheritance //
class Car {
  constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
  }
  di() {
      console.log(`${this.year} ${this.make} ${this.model}`);
  }
}
class ElectricCar extends Car {
  constructor(make, model, year, batteryLife) {
      super(make, model, year);
      this.batteryLife = batteryLife;
  }
  d() {
      console.log(`Battery life: ${this.batteryLife} hours`);
  }
}
let tesla = new ElectricCar("Tesla", "Model S", 2022, 24);
tesla.di()
tesla.d();

// class based inheritance//
class one {
  constructor(name) {
     this.name = name
  }
  speaks() {
    return `my name is ${this.name}`
  }
}
class two extends one {
  constructor(name) {
    super(name)
  }
}
const v = new two('Vineela')
console.log(v.speaks())

// mixins for inheritance//
const one = {
  speak() {
    return `${this.name} speaks`
  }
}
const two = {
  walks() {
    return `${this.name} walks`
  }
}
function Person(name) {
  this.name = name
}
Object.assign(Person.prototype, one, two)
const person1 = new Person('Vineela')
console.log(person1.speak())
console.log(person1.walks())

// inheritance with object.create()//
let obj = {
  name: 'Vineela',
  age: 23,
  prints() {
    return `my name is ${this.name}`
  }
}
let obj1 = Object.create(obj)
obj1.name = 'Vinni'
console.log(obj1.age)
console.log(obj1.prints())

// inheritance with PrototypeOf() //
const one =  {
  speak() {
    return `${this.name} speaks`
  }
}
const two = {
  name: 'Vineela'
}
Object.setPrototypeOf(one, two)
console.log(one.speak())

// factory fun for inheritance//
function createPerson(name) {
  return {
    name: name,
    greet() {
      return `Hello my name is ${this.name}`
    }
  }
}
const one = createPerson('Vinni')
const two = createPerson('Binni')
console.log(one.greet())
console.log(two.greet())

// creating multiple objects from a class//

class Car {
  constructor(make, modle, year) {
    this.make = make;
    this.modle = modle;
    this.year = year;
  }
  v() {
    console.log(`${this.modle}, ${this.make}, ${this.year}`);
  }
}
let c1 = new Car("Toyota", "Cobra", 2024);
let c2 = new Car("Kia", "Bagafa", 2025);
c1.v();
c2.v();

// this keyword //
const Person = {
  name: "JavaScriptCourse",
  greet() {
    return `Welcome To, ${this.name}`;
  }
};
console.log(Person.greet());

function greet() {
  console.log(`Hello, my name is` + this.name);
}
const Person = {
  name: 'Vineela',
  sayHello: greet
};
const anotherPerson = {
  name: 'Vinni'
};
greet();
Person.sayHello();
greet.call(anotherPerson);

const Person = {
  name: 'Vineela',
  age: 23,
  greet : () => {
    return `Hello, you are ${this.age} years old`
  }
}
console.log(Person.greet());


// Methods //
class MathUtils {
  static add(a,b) {
    return a +b;
  }
  static multiply(a,b) {
    return a *b;
  }
}
console.log(MathUtils.add(5, 3));
console.log(MathUtils.multiply(2,8));

// math.max() //
class Calc {
  static getMax(...numbers) {
    return Math.max(...numbers);
  }
}
console.log(Calc.getMax(1, 5, 6, 4));
// Encapuslation//
// using closures//

function BankAccount(accountNumber, accountHolderName, balance) {
  let _accountNumber = accountNumber;
  let _accountHolderName = accountHolderName;
  let _balance = balance;
  function showAccountDetails() {
    console.log(`Account Number: ${_accountNumber}`);
    console.log(`Account Holder Name: ${_accountHolderName}`);
    console.log(`Balance: ${_balance}`); 
  }
  function deposit(amount) {
    _balance += amount;
    showAccountDetails();
  }
  function withdraw(amount) {
    if (_balance >= amount) {
      _balance -= amount;
      showAccountDetails();
    } else {
      console.log("Insufficient Balance");
    }
  }
  return {
    deposit,
    withdraw
  };
}
let myBankAccount = BankAccount("1123456", "Vineela", 1000);
myBankAccount.deposit(1500);     
myBankAccount.withdraw(5000);    
*/
// using class//
class BankAccount { 
  constructor(accountNumber, accountHolderName, balance) {
    this._accountNumber = accountNumber;
    this._accountHolderName = accountHolderName;
    this._balance = balance;
  }
  showAccountDetails() {
    console.log(`Account Number: ${this._accountNumber}`);
    console.log(`Account Holder Name: ${this._accountHolderName}`);
    console.log(`Balance: ${this._balance}`);
  }
  deposit(amount) {
    this._balance += amount;
    this.showAccountDetails();
  }
  withdraw(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
      this.showAccountDetails();
    } else {
      console.log("Insufficient Balance");
    }
  }
}
let myBankAccount = new BankAccount("1897630", "Vineela", 1000);
myBankAccount.deposit(1000);