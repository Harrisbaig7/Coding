const express = require("express");

//express -> framework of node
//read static files
//rendering html view(view from database at particular moment, instance of view)(materialized view -> again and again)
//static view(html)
//dynamic view(view engines like ejs from servers e.g laravel) -> not implementable in reality usually
//server will provide data not views
//views from React
//frontend -> node -> express app(ready response from middleware or smth)

//Express Parts
//1 Middleware
//2 Routing
//3 Sub App(routers)

// req from client to server
// server will identify router(sub application e.g modules of fyp -> each module a router)

// conditional rendering
// /admin/view
// same like routing table in dccn
// specific routes at top else after that

// route url + method
//AppName.method
//e.g App.get('/view')

//function(req, res, next){}

//middleware -> function
// fn(req, res, next)
// next calls next middleware in sequence //next optional
// first send req to second to third
// if first and second is not to be executed then we short circuit it
// and it will be sent to last default middleware to handle them/error.
// we pass error to next next(error)
// by default its send empty
// last default middleware has 4 parameters with extra error parameter
// this handles bypassed errors from prev middlewares

//(divide big code to small chunks)
//Morgan is a middleware to maintain log
//Default in Express

//Authentication is also a middle ware

//code on server
// 1. log-> request type, time, from which ip, for which url
// 2. authentication check
// 3. send response

//receive variable 3 ways
//'form' received in req.body
// in url :id received by req.params.id
// through ? -> query string received by req.query.var

//Static files
//in a folder
//accessed by express.static(dir)
// static files html, css, jpg

// .all means any method from that url //for any last route
// .use middleware fn is executed for every request

// ? with any parameter in optional
// else compulsory

//res fn added by express
//res.send -> write and end
//res.json -> send and convert it to json

//create express app
//npm install express-generator -g
//express projectName
//cd projectName
//npm install
//npm start

//path.join -> platform independence
//bodyparser -> express.json
//

// App.set
// application level props
// views path, titles

// Router Object
//
//

//render -> utilization of view engine here jade

//.render => send views // for server side rendering
//.send => only data send

//restapi => NO view here but in React App
//res.send res.json

//three steps
// require express
// make Router
// module.export

//JADE
//include layout.jade
//displays
//views

//layout.jade is only header file
//jade programming is like html without tags but indentation

//PUBLIC
//static files
//bootstap, js, css, images
//but practically no views on server side

// create route
// req
// use

//Model //interact with db
//View //frontend
//Controller //router fn backend logic

//update layout.jade to add bootstrap or smth
