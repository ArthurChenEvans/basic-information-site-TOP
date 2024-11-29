const fs = require('fs');
const http = require('http');

const indexPage = fs.readFileSync('index.html', 'utf8');
const aboutPage = fs.readFileSync('about.html', 'utf8');
const contactPage = fs.readFileSync('contact-me.html', 'utf8');
const errorPage = fs.readFileSync('404.html', 'utf8');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(indexPage);
    }
    else if (request.url === '/about') {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(aboutPage);
    }
    else if (request.url === '/contact-me') {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(contactPage);
    } else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.end(errorPage);
    }
});

server.listen(8000);