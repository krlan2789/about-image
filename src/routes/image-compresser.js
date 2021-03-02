const gm = require('gm');
const sharp = require('sharp');
const sizeOf = require('image-size');
const fs = require('fs');

const compress = (inputName, outputName) => {
  sizeOf(inputName, function (err, dimensions) {
    console.log(dimensions.width, dimensions.height);
    gm('../' + inputName).resize(dimensions.width/8, dimensions.height/8).write('../compressed/' + outputName, err => {
      if (err) console.log(err);
      console.log('Conversion Completed!');
    });
  });
}

const compress2 = (inputName, outputName) => {
  const dir = './compressed';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  sizeOf(inputName, function (err, dimensions) {
    sharp(inputName).resize(parseInt(dimensions.width/1.5), parseInt(dimensions.height/1.5)).jpeg({
      quality: 80,
      chromaSubsampling: '4:4:4'
    }).toFile(outputName, (err, info) => {
      if (err) console.log(err);
    });
  });
}

module.exports = {
  compress,
  compress2
};