

var http = require('http');
var URL = require('url');


var server = http.createServer(function (req, res) {

    var myURL = "https://www.youtube.com/watch?v=JWnpfkA6V2A&list=PLkyGuIcLcmx2qXaZkjCL8-P78i2J5rDOa&index=9";

    var myURLObj = URL.parse(myURL, true);

    var myHostName = myURLObj.host;
    var myPathName = myURLObj.pathname;
    var mySearchName = myURLObj.search;

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(myPathName);
    res.end();


});

server.listen(5050);
console.log("Server Run Success");