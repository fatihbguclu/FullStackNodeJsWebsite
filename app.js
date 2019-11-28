const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const admin = require('./routes/admin');
const index = require('./routes/index');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', './views');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', index);
app.get('/about', index);
app.get('/contact', index);
app.get('/galeri', index);
app.get('/urun-gruplari', index);

app.get('/ahsap-sandalye', index);
app.get('/metal-sandalye', index);
app.get('/bar-sandalye', index);
app.get('/plastik-sandalye', index);
app.get('/klasik-sandalye', index);
app.get('/restaurant-sandalye', index);

app.use('/admin', admin);


app.listen(port, () => {
  console.log('App listening on port 3000!');
});

