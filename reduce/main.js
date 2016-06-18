// 1
const data = [10,40,50];

let meanReducer = (accumulator, value, index, array) => {
  let intermediaryValue = accumulator + value;

  if (index === array.length -1 ) {
    return intermediaryValue / array.length;
  }

  return intermediaryValue;
};

let mean = data.reduce(meanReducer, 0);

console.log(`total is: ${mean}`);


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
