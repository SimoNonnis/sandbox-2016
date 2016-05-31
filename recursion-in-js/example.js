// simple recursion example
let countDownFrom = (num) => {
  if (num === 0) {
    return;
  }
  console.log(num);
  countDownFrom(num - 1);
};

countDownFrom(10);

// make categories tree
let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'bullterrier', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' }
];

let makeTree = (cat, parent) => {
  let node = {};

  cat
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(cat, c.id));

  return node;
};


let tree = JSON.stringify(
  makeTree(categories, null),
  null,
  2
);

console.log(tree);
