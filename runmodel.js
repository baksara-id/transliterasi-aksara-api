// import * as tf from './tfjs@latest';
let model;
let INPUT_SIZE;

async function predict(imagePath) {
    // Memuat gambar dari path lokal menggunakan HTML5 Image
    const image = new Image();
    image.src = imagePath;
    await image.decode();
  
    // Membuat sebuah <canvas> untuk mengubah ukuran gambar
    const canvas = document.createElement('canvas');
    canvas.width = INPUT_SIZE[0]; // Ganti desiredWidth dengan lebar yang diinginkan
    canvas.height = INPUT_SIZE[1]; // Ganti desiredHeight dengan tinggi yang diinginkan
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  
    // Mengonversi gambar dari <canvas> menjadi Tensor
    const tensor = tf.browser.fromPixels(canvas)
      .toFloat()
      .expandDims();
  
    // Normalisasi Tensor
    const normalizedTensor = tensor.div(tf.scalar(255));
  
    // Melakukan prediksi pada Tensor normalisasi
    const predictions = await model.predict(normalizedTensor).data();
  
    console.log('Return Prediksi: ',predictions);
    // Mengambil kelas dengan probabilitas tertinggi
    const highestPrediction = Array.from(predictions)
      .map((p, i) => ({ probability: p, classIndex: i }))
      .sort((a, b) => b.probability - a.probability)[0];
    console.log('Return Prediksi Tertinggi: ',highestPrediction);
  }



async function init(){
    model = await tf.loadLayersModel('model/model.json');
    const [batchSize, ...inputSize] = model.input.shape;
    INPUT_SIZE = inputSize;
    console.log('Input Size:', INPUT_SIZE);
}

init();