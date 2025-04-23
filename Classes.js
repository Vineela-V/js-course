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
  */
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