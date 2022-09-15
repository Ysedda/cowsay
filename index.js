const student = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hi, I'm ${student.name} from ${student.campus}`,
    e : "oO",
    T : "U "
}));