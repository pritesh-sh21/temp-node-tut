const path=require('path');

console.log(path.sep);

//Join all arguments together and normalize the resulting path.
const filePath=path.join('/content///','subfolder','test.txt');
console.log(filePath);

//returns filename
const base=path.basename(filePath);
console.log(base);

//returns absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)