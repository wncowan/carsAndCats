var http    = require('http'),
    fs      = require('fs');

var server = http.createServer(function(req,res) {
    //Page requests
    if (req.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end()
        });
    } else if (req.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    } else if (req.url === '/cars/new') {
        fs.readFile('./views/carform.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }

    //resource requests
    else if(req.url === '/stylesheets/style.css'){
        fs.readFile('stylesheets/style.css', function(errors, contents){
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(contents);
            res.end();
        })
    }
    else if(req.url === '/images/car.png'){
        fs.readFile('./images/car.png', function(errors, contents){
            res.writeHead(200, {'Content-type': 'img/png'});
            res.write(contents);
            res.end();
        })
    }
    else if(req.url === '/images/cat.jpeg'){
        fs.readFile('./images/cat.jpeg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'img/jpeg'});
            res.write(contents);
            res.end();
        })
    }

    //otherwise, serve error page
    else {
        fs.readFile('./views/error.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }
});

server.listen(6789);
console.log("Running at localhost 6789");