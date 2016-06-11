var fetch = require('node-fetch');

var loadUser = (user) => {
    const ROOT_URL = 'https://api.github.com/users/';
    return fetch(ROOT_URL + user);
}


Promise.all([
  loadUser('SimoNonnis'),
  loadUser('wesbos')
])
  .then(users => {
    users.map(user => {
      user.json()
        .then(user => {
          const userInfo = `username: ${user.login} \nbio: ${user.bio} \nwebsite: ${user.blog}\n\n`

          console.log(userInfo);
        })
    })
  })
  .catch(err => console.log(new Error('====> Ooops! Error catched <====')));
