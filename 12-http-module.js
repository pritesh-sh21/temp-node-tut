const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
     res.end('<h1>Hello world</h1>')
    else if(req.url==='/about')
     res.end('here is our short history')
    else
     res.end(`<h1>oops!!</h1> <p>We cant seem to find the page you are looking for</p> <a href="/">back home</a>`)
})

server.listen(5000)