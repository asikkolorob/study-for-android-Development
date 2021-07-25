var http = require ('http');

var server = http.createServer ( function ( request,response ) {
    response.end ('Hello World')
});

server.listen (5050);
console.log ('server run success');