// import json server
const jsonServer=require('json-server')
// create server for MP
const mpServer=jsonServer.create()
// create a middleware
const middleware=jsonServer.defaults()
// set route for json file
const route =jsonServer.router()
// to available app in port
const PORT=3000 || process.env.PORT 

mpServer.use(middleware)
mpServer.use(route)
mpServer.listen(PORT,()=>{
    console.log(`media player server started at port ${PORT} and waiting for client request`);
    
})