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
