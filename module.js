const xyz = require('./people'); // reqire makes automated running of required file
//console.log(xyz);
//console.log(people) // requie doesnt make the required file accessible or usable
console.log(xyz.people, xyz.ages);


///////////////////////////////    or ///////////////////////////////////
const {people, ages} = require('./people');
console.log(people, ages);

const os = require('os');
console.log(os);
console.log(os.platform(), os.homedir());