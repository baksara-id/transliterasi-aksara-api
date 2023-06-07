var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
// ----------------------------------------------
const tf = require('@tensorflow/tfjs-node');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
// ----------------------------------------------

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// ----------------------------------------------
let model;
let inputSize;
const CLASS_DICT = [
  'carakan_ba',
  'carakan_ca',
  'carakan_da',
  'carakan_dha',
  'carakan_ga',
  'carakan_ha',
  'carakan_ja',
  'carakan_ka',
  'carakan_la',
  'carakan_ma',
  'carakan_na',
  'carakan_nga',
  'carakan_nya',
  'carakan_pa',
  'carakan_ra',
  'carakan_sa',
  'carakan_ta',
  'carakan_tha',
  'carakan_wa',
  'carakan_ya',
  'pasangan_ba',
  'pasangan_ca',
  'pasangan_da',
  'pasangan_dha',
  'pasangan_ga',
  'pasangan_ha',
  'pasangan_ja',
  'pasangan_ka',
  'pasangan_la',
  'pasangan_ma',
  'pasangan_na',
  'pasangan_nga',
  'pasangan_nya',
  'pasangan_pa',
  'pasangan_ra',
  'pasangan_sa',
  'pasangan_ta',
  'pasangan_tha',
  'pasangan_wa',
  'pasangan_ya',
  'sandhangan_e',
  'sandhangan_e2',
  'sandhangan_h',
  'sandhangan_i',
  'sandhangan_ng',
  'sandhangan_o',
  'sandhangan_r',
  'sandhangan_u',
];
// Load the TensorFlow model
async function loadModel() {
  const modelPath = 'model/model.json';
  model = await tf.loadLayersModel(`file://${modelPath}`);
  const [batchSize, ...size] = model.inputs[0].shape;
  inputSize = size;
  console.log('Input Size:', inputSize);
}

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Define a route for prediction
app.post('/predict', upload.single('img'), async (req, res) => {
  // Access the uploaded file
  const file = req.file; // ambil image
  const actual_class = req.body.actual_class; // ambil actual class

  // Preprocess the image using sharp
  const preprocessedImage = await sharp(file.path)
    .resize({ width: inputSize[0], height: inputSize[1] })
    .normalize()
    .toBuffer();

  // Convert the preprocessed image to a tensor
  const imageTensor = tf.node.decodeImage(preprocessedImage).toFloat();
  const normalizedTensor = imageTensor.div(tf.scalar(255)).expandDims();

  // Perform prediction using the loaded model
  const predictions = await model.predict(normalizedTensor).data();
  const arr_pred = predictions[String(CLASS_DICT.indexOf(actual_class))];
  // Send the prediction result as the response
  res.json({ result: arr_pred });

  // Clean up the uploaded file
  fs.unlinkSync(file.path);
});

//   ----------------------------------------------

loadModel();

module.exports = app;
