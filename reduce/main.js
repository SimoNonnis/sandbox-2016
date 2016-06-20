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

// 4
const input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce((acc, value) => {
  value.cast.map(star => {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  })

  return acc;
}, [])

console.log(stars);

// 5
function increment(x) {
  return x + 1;
}

const pipeline = [
  increment,
  increment,
  increment
];

const output_value = pipeline.reduce((acc, fn) => {
  return fn(acc);
}, 0);

console.log(output_value);
