var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 9999;



app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.static("public"));


app.get('/',function(req,res) {
  res.render('index');
})


http.listen(port, function() {
    console.log('listening on localhost:' + port);
});
