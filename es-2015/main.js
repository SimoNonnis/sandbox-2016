'use strict';
// Arrow function
const messenger = {
  name: 'Simon',
  handleMsg(msg, cb) {
    return cb(msg);
  },
  deliver(msg) {
    this.handleMsg(msg, _ => console.log(`Start op: "${msg}" -${this.name}`));
  }
};

messenger.deliver('Red fog');

//let keyword
const f = [];

for (let i = 0;i <= 10; i++) {
  f.push(_ => console.log(i));
}

f.forEach(x => x());

//default parameters
const greeting = ( name, msg = 'Hello') => console.log(`${msg} ${name}`);

greeting('Simon', 'Hello');

//const variable declaration
const VALUE = {};
VALUE.foo = 'hi';
console.log(VALUE);

const BLOCK = 'global';

{
  const BLOCK = 'block scope';
  console.log(BLOCK);
}

console.log(BLOCK);

//shorthand properties
let firstName = 'Simon';
let lastName = 'Nonnis';
let role = 'web dev';

let person = {firstName, lastName};
let team = {person, role};

console.log(team);

//shorthand Properties
const color = 'orange';
const speed = 10;

const car = {
  color,
  speed,
  go() {
    console.log('vrooom');
  }
};

console.log(car.color, car.speed);

car.go();

//spread operator
const first = [1,2,3];
const second = [4,5,6];

first.push(second);
first.push(...second);

console.log(first);
