const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imagenesdb', 
  { useNewUrlParser: true }
)
  .then(db => console.log('Conectado a DB'))
  .catch(err => console.error(err));