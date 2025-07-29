const http = require('http');

const path=require('path');
const fs=require('fs');
const filePath=path.join(__dirname,'./db/todo.json')

const server=http.createServer((req,res)=>{
  if(req.url==='/hello' && req.method==='GET'){
    const data=fs.readFileSync(filePath,{encoding:'utf-8'});
    res.writeHead(200,{
      // "content-type": "text/plain",
      "content-type": "application/json",
      // "email":"sabbir@gmail.com"
    })
    res.end((data));
  }
  else if(req.url==='/hello/new' && req.method==='POST'){
    res.end('Bye endpoint was hit');
  }
  else{
    res.end('Not Found');
  }

})





server.listen(5000,"127.0.0.1",()=>{
  console.log('Server is running on 5000');
})




