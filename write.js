const fs = require('fs');

fs.writeFile ('nodejs_architecture.txt', 'hey', (err,fd)=>{
    if(err){
        console.log('file is created');
    }
})