var fetch = require('node-fetch');

let p1 = new Promise((resolve, reject) => {
  setTimeout(x => resolve(100),2000)
});

p1.then(result => console.log(result));

setTimeout(() => p1.then(result => console.log(result * 1000)),6000)

// example of returning a promise, where we randomly fulfill or reject after 3 second.

var p2 = Promise.resolve()
  .then(data => new Promise((resolve, reject) => {
    setTimeout(Math.random() > 0.1 ? resolve : reject, 3000)
  }));

p2.then(data => console.log('Okay'));
p2.catch(data => console.log('Oooops'));

// first creates a promise fulfilled with [1, 2, 3] and then has a fulfillment // branch on top of that which maps thoes values into [2, 4, 6]. Calling .then // on that branch of the promise will produce the doubled values.

var p3 = Promise.resolve([1,2,3]);

p3.then(values => values.map(x => x * 2))
  .then(values => console.log(values));
