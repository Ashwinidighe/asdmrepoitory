var express = require('express');
var app = express();

//Reusable controllers
var ordersController=function(req, res){
  console.log("Invoking  rest api for product list");
  var product = [
    {empid:1, customer:"ashu",name:"fabricam" },
    {empid:2, customer:"deepa", name:"fabricam"},
    {empid:3, customer:"nitsh", name:"fabricam"}
  ];
  res.send(product);
};
 
// setting router to map requests  with controllers

app.get('/products',ordersController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})