const userInfo = require('./information');

const cowsay = require ("cowsay");

console.log(cowsay.say( {
text : `Hi, my name is ${userInfo.name}, I'm ${userInfo.age} from ${userInfo.campus}`
}));

