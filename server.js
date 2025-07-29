const http = require('http');

const server=http.createServer((req,res)=>{
  if(req.url==='/hello' && req.method==='GET'){
    res.end('Hello endpoint was hit');
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




