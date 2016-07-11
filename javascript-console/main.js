'use strict';

console.log('this is a log');
console.warn('this is a warning');
console.error('this is an error');
console.info('this is info');
//console.debug('this is a debug'); available in browser not in node

console.log('hello', 'world', '!');
console.log({foo: 'bar'});
console.log('hi my name is %s and i love %s', 'Simon', 'JS');
// console.log('this is %coutput', 'color: orange');

// You could use \t but the correct way is console.group/groupCollapsed
// for (let i = 0; i < 100; i++) {
//   var num = Math.random() * 100;
//   console.group('Picking a random number');
//     console.log('Number greater than 10?', num > 10);
//     console.log('Number greater than 50?', num > 50);
//     console.log(i);
//   console.groupEnd();
// }

// var foo;
// console.assert(foo, 'foo is undefined');

// for (let i = 0; i < 100; i++) {
//   var num = Math.random() * 100;
//
//   if (num > 50) {
//     console.count('greater than 50');
//   } else {
//     console.count('less than 50');
//   }
// }

var arr = [];
console.time('fill arr');
for (let i = 0; i < 10; i++ ) {
  arr.push(i);
}
console.log(arr);
console.timeEnd('fill arr');

// console.table(["apples", "oranges", "bananas"]);
