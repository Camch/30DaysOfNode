const fs = require('fs');

function nSCallback(error, data){
    if(error){
        console.error('Error: ', error);
        return;
    }
    console.log(data);
}

fs.readFile('notes.txt', nSCallback);
fs.readFile('non-existing.txt', nSCallback);