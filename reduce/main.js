// 1
const data = [10,40,50];

let reducer = (accumulator, item) => {
  return accumulator + item;
};

let total = data.reduce(reducer, 0);

console.log(`total is: ${total}`);


// 2
const votes = [
  'haskell',
  'javascript',
  'clojure',
  'haskell',
  'php',
  'lisp',
  'haskell',
  'elm',
  'elm'
];

let votesReducer = (tally, vote) => {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }

  return tally;
};

let result = votes.reduce(votesReducer, {});

console.log(result);


// 3
const list = [10,20,30, 7, 3, 55];

let evensReducer = (acc, i) => {
  if ( i % 2 === 0) {
    acc.push(i);
  }
  return acc;
};

let evens = list.reduce(evensReducer, []);

console.log(evens);
