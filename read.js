const fs = require('fs');

fs.readFile('nodejs_architecture.txt', 'utf8',(err,data) =>{
    if (err) {
                console.log('Error:', err);
                return err;
            }
            console.log('Data:', data.toString());
            return data;
} )