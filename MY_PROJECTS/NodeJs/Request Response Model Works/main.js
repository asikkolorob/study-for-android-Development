var CreateHttp = require ('http');

var server = CreateHttp.createServer ( function ( req,res ) {
    if (req.url == '/') {
        res.writeHead ( 200, {'Content-Type':'text/html'})
        res.write ('<h1>This is Home Page</h1>')
        res.end ();
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>This is About Page</h1>')
        res.end ();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { ' -Type': 'text/html' })
        res.write('<h1>This is Contact Page</h1>')
        res.end ();
    }
});

server.listen (3030);
console.log ('server run success');