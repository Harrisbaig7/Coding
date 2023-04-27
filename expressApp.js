/**
At a particular moment/time stamp display is called View
Dynamic View: Laravel, Blade engine
Static View: Html page with css
EXPRESS PARTS
MiddleWare:
Routing:
sub Applications:
first router request which is a sub-application
every module is a router
every request goes to a module
Admin/View shows we go es to admin module
specific route first  on top then generic ones
log is used a request which user ued to access the website 
log the request
morgan is a middleware that maintains log automatically in express
next function is used after 1 middleware end then 2 middleware works otherwise not
App.get('/View', function(req, res, next(optional)){
}
app.post Or app.put or app.delete
req.body / req.password
req,query
.all me any method se request a sakti ha
app.use is used that it which is run by default every requests and execute for every request
parameters are optional with ? otherwise not optional
response.json (var0) // var json me convert ho ga
response.sendfile()// send file 
App.set->Views,titles
last middleware handling error response bypass all middleware by default

**/
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send("Hello, world!");
})
app.listen(80,()=>console.log('listening on port 80'));
