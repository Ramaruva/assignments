const fs = require("fs");

fs.readFile('./sampleFile.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    data = data.replace(/\s+/g,'');
    if(data){
        fs.writeFile('./sampleFile.txt',data,err=>{
            console.log(err);
        })
    }
})