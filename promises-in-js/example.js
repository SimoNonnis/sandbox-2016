var fetch = require('node-fetch');

var loadUser = (user) => {
  const ROOT_URL = 'https://api.github.com/users/';
  return fetch(ROOT_URL + user);
}

// Gate
Promise.all([
  loadUser('SimoNonnis'),
  loadUser('wesbos')
])
  .then(users => {
    users.map(user => {
      user.json()
        .then(user => {
          let userInfo = `username: ${user.login} \nbio: ${user.bio} \nwebsite: ${user.blog}\n\n`

          console.log(userInfo);
        })
    })
  })
  .catch(err => console.log(new Error('====> Ooops! Error catched <====')));



// Latch
const p1 = Promise.resolve(41);
const p2 = Promise.resolve('Hello there');
const p3 = Promise.reject('Ooops!');

Promise.race([p1, p2, p3])
  .then(msg => console.log(`Wins the race: ${msg}\n`))
  .catch(err => console.log(err));


//promise api
const d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Good');
    } else {
      reject('no bueno');
    }
  }, 2000);
});

d.then(fulfillment => console.log('success: ', fulfillment));

d.catch(rejection => console.log('error: ', rejection));
