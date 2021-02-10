const fs = require('fs');
const readStream = fs.createReadStream('./docs/streamText.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/streamText2.txt');


// readStream.on('data', (chunk) => {
//     console.log('............new chunk...............');
//     console.log(chunk);
//     writeStream.write('\n New chunk \n');
//     writeStream.write(chunk);

// });

//piping
readStream.pipe(writeStream);
