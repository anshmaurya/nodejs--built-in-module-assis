const fs = require('fs');

fs.unlink('nodejs_architecture.txt', function(err){
    if (err){
        console.log("File not Deleted");
    }
    else{
        console.log("File Deleted Successfully");  
    }
});
