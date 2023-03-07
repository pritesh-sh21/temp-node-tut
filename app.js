// npm - global command, comes with node
//  npm --version

// local dependency - use it only in this particular project;
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>

//  package.json - manifwst file stores important info about project/package
// manual approach(create package.json in this root, createproperties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default

const _=require('lodash')

const items=[1,1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(_.countBy(newItems))
console.log(newItems);