const fs = require('fs');

//create a file.

fs.writeFile('example.txt',"This is an example",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File successfully created");
    }
});

// Read file.
fs.readFile('example.txt','utf-8',(err,file)=>{
    if(err){
        console.log(err);
    }
    else{
        // Initially, without encoding we will get a buffer stream.
        console.log(file);
    }
});

fs.rename('example.txt','example2.txt',(err)=>{
    if(err){
        console.log("Some error occured");
    }
    else{
        console.log("Successfully renamed the file");
    }
});

fs.appendFile('example2.txt',"Some dat is being appended",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully appended data to the file");
    }
});

fs.unlink('example2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted the file");
    }
});

