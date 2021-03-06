var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send('hi there from root route!');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function() {
  console.log('app is running on port 3000.');
});