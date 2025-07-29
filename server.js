const http = require('http');
const data=[
  {id:1,name:"sabbir",email:"sabbir@gmail.com",time:"2023-10-01T12:00:00Z"},
  {id:2,name:"john",email:"habu@gmail.com",time:"2023-10-01T12:00:00Z"},
  {id:3,name:"doe",email:"nasu@gmail.com",time:"2023-10-01T12:00:00Z"},
  {id:4,name:"jane",email:"kabu@gmail.com",time:"2023-10-01T12:00:00Z"},
]

const server=http.createServer((req,res)=>{
  if(req.url==='/hello' && req.method==='GET'){
    res.writeHead(200,{
      // "content-type": "text/plain",
      "content-type": "application/json",
      // "email":"sabbir@gmail.com"
    })
    res.end(JSON.stringify(data));
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




