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

//string interpolation
function tag(strings, ...values) {
  if (values[0] < 12) {
    values[1] = 'Sleepy';
  } else if (values[0] > 12) {
    values[1] = 'Awake';
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}
const message = tag`It's ${new Date().getHours()}, I am ${''}`;

console.log(message);

//Destructuring
function modulePattern() {
  return {
    name: 'Simon',
    surname: 'Nonnis'
  }
};

const {name, surname} = modulePattern();

console.log(name, surname);

const people = [
  {
    firstName: 'Simon',
    lastName: 'Nonnis'
  },
  {
    firstName: 'Adam',
    lastName: 'Snow'
  }
];

people.map(({firstName}) => console.log(`* ${firstName}`))

//maps
let myMap = new Map();

//API
// set()
// get()
// size
// clear()
// has()

myMap.set('foo', 'bar');
myMap.set('Simon', 'Nonnis');

console.log(myMap.has('foo'));

// iterators
// entries
// keys
// values

for (let value of myMap.values()) {
  console.log(value);
}

//rest parameters
function Store() {
  let aisle = {
    fruit: [],
    vegetables: []
  };

  function add (category, ...items) {
    console.log(items);
    items.forEach((value) => {
      aisle[category].push(value);
    })
  };

  return {
    aisle,
    add
  }
};

let myGroceryStore = new Store();

myGroceryStore.add('fruit', 'orange', 'apples', 'grapes');
