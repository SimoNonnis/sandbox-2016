// concat
var people = [
  {
    name: 'Shane'
  },
  {
    name: 'Sally'
  }
];

var people2 = [
  {
    name: 'Simon'
  },
  {
    name: 'Ben'
  }
];

people
  .concat(people2)
  .forEach(function (person) {
    console.log(person.name);
  });

// split
const name = 'simon nonnis'

const upper = name
  .split(' ')
  .map(x => x.charAt(0).toUpperCase() + x.slice(1))
  .join(' ');

console.log(upper);

// indexOf
const family = ['Shane', 'Tom', 'River', 'Simon'];

const exists = where => who => where.indexOf(who) > -1;
const isInFamily = exists(family);
const isIn = isInFamily('River');

console.log(isIn);

// slice
const items = [1,2,3,4,5,6];

const copy = items.slice(2, -1);

console.log(copy);
