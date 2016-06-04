var fetch = require('node-fetch');

// Let's consider as example the fetch API, which internally creates a new promise object
// If the fetch API used callback design

// error-first style aka node.js style
fetch('foo', (err, res) => {
  if (err) {
    // handle error
  }

  // handle response
});


// split callback
function failure(data) {
  // handle error
};

function success(data) {
  // handle success
};

fetch('foo', failure, success);


// simplest use case
fetch('foo').then((res) => {
  // handle fulfillment
})


// .then is able to register a reaction to rejections as its second argument
var p = fetch('foo');

p.then(
  (res) => {
    // handle success
  },
  (err) => {
    // handle error
  }
);

// .catch takes only rejection (err) as argument
var p = fetch('foo');

p.then(res => {
  // handle success
});

p.catch(err => {
  // handle error
});


// Creating a Promise From Scratch
new Promise(resolve => resolve(42))
  .then(
    res => console.log(`Hello: ${res}`)
  );
