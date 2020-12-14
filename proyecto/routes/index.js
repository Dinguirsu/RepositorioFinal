var express = require('express');
var router = express.Router();
var multer = require('multer');
var ObjectID = require('mongodb').ObjectID;

const imagen = require('../Modelo/imagenes');

//const ProductModel = require('../Modelo/imagenes.model');

const storage = multer.diskStorage({
  destination: 'Imagenes/Subidas',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

router.use(multer({
  storage,
  dest: 'Imagenes/Subidas'
}).single('imagen'));


/* GET home page. */
router.get('/', async(req, res, next) => {
  const imagenes = await imagen.find();
  console.log(imagenes);
  res.render('iniciomostrar', {imagenes});
});

router.get('/buscar/:filename', async(req, res)=>{
  try {
    const {filename} = req.params;
    console.log(filename);
    const buscar = await imagen.find( {filename : filename} );
    
    res.render('buscar', {buscar});
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ "msg": "Algo Malir Sal." });
  }
  
});

router.get('/subir', function(req, res, next) {
  res.render('subirImagenes2');
});

router.post ('/subido', async(req, res, next) => {
  
  const image = new imagen();
  image.title = req.body.title;
  image.description = req.body.description;
  image.filename = req.file.filename;
  image.path = "Imagenes/Subidas/" + req.file.filename;
  image.originalname = req.file.originalname;
  image.mimetype = req.file.mimetype;
  image.size = req.file.size;

  await image.save();

  
  res.send('Subido');

});

// router.get('/obtenerImagen', function(req,res) {
//   const images = await imagen.find();
//   res.render('inicio', { images });
// });

 router.get('/categories/byname/:id', async (req, res) => {
   try {
     let id  = req.params;
     let rsltset = await imagen.findById();
     res.status(200).json(rsltset);
   } catch (ex) {
     console.log(ex);
     res.status(500).json({ "msg": "Algo Malir Sal." });
   }
 });

module.exports = router;
