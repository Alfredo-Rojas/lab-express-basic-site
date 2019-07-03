const express = require('express');

const app = express();

//make public content available
app.use(express.static('public'));

//home page route
app.get('/', (request, response, next) => {
  response.send('<h1>Welcome to Barcelona FC</h1>')
});

//about page route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});

//gallery page route
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

//server started
app.listen(3000, () => {
  console.log('my app listening on port 3000');
})