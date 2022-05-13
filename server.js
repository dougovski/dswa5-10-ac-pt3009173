const express = require('express');
var http = require('http');
var app = require('./config/express')(app);
require('./config/passport')();
//require('./config/database')('mongodb://localhost:3000/contatos');

const url =
   'mongodb://dswa5:dswa5@cluster0-shard-00-00.dlwic.mongodb.net:27017,cluster0-shard-00-01.dlwic.mongodb.net:27017,cluster0-shard-00-02.dlwic.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-zh16lc-shard-0&authSource=admin&retryWrites=true&w=majority';

require('./config/database.js')(url);

http.createServer(app).listen(app.get('port'), function () {
   console.log('Express Server escutando na porta ' + app.get('port'));
});
