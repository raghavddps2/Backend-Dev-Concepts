const fs = require('fs');
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully created the folder");
    }
});

fs.rmdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Deleted Successfully");
    }
});


fs.mkdir('tutorial1',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile('./tutorial1/example.txt',"Hello world from node fs",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("SUccessfully create file");
            }
        })
    }
});
fs.unlink('./tutorial1/example.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.rmdir('tutorial1',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Deleted successfully");
            }
        });
    }
})

/**
 * 
 * Guys, here node is working asynchronously!
 */

fs.readdir('example',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Successfully deleted file");
                }
            })
        }
    }
});