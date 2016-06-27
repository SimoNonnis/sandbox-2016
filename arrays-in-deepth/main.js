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

//sort
const books = [
  {
    title: 'Animal Farm',
    year: 1945
  },
  {
    title: 'Coming Up for Air',
    year: 1939
  },
  {
    title: 'Nineteen Eighty-Four',
    year: 1949
  }
];

const list = books
  .sort((a, b) => a.year - b.year)
  .map(x => `   <li>${x.title}: ${x.year}}`)
  .join('\n');

const output = ` <ul>\n${list}\n</ul>`;

console.log(output);

//filter
const lessons = [
  {
    title: 'Javascript Arrays in Depth - join',
    views: 960,
    tags: ['array', 'join']
  },
  {
    title: 'Javascript Arrays in Depth - concat',
    views: 1050,
    tags: ['array', 'concat']
  },
  {
    title: 'Javascript Arrays in Depth - slice',
    views: 2503,
    tags: ['array', 'slice']
  },
  {
    title: 'Javascript Functions in Depth - bind',
    views: 2500,
    tags: ['functions', 'bind']
  }
];

const minViews = 1000;
const searchTerm = 'array';

var filtered = lessons
  .filter(x => x.views > minViews)
  .filter(x => x.tags.includes(searchTerm))
  .sort((a, b) => b.views - a.views)
  .map(x => `   <li>${x.title}</li>`)
  .join('\n');

console.log(` \n<ul>\n${filtered}\n</ul>\n`);


//some
var tasks = [
  {
    title: 'Do laundry',
    completed: true
  },
  {
    title: 'Feed the cat',
    completed: true
  }
];

function addTask(title) {
  if (tasks.some(x => x.title === title)) {
    return console.log('Duplicate task!');
  };
  tasks.push({
    title,
    completed: false
  })
}

addTask('Go to run');
addTask('Go to run');

console.log(tasks);

//map
const names = [
  '  Simon',
  'Milton   '
];

const trimedNames = names.map(x => x.trim());

console.log(trimedNames);
