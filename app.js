const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const compress = require('./src/routes/image-compresser');
const uploader = require('./src/tools/image_uploader');
const cleanup = require('./src/tools/clean_uploaded');

const app = express();
const port = 4100;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('It\'s works!');
});

//  Compress image
app.post('/image/compress', uploader, (req, res) => {
    const fileCompressedPath = path.join(__dirname, 'compressed', 'compressed-image.jpg');
    compress.compress2(req.file.path, fileCompressedPath);
    cleanup();
    res.json({ originalImage: req.file.path, compressedImage: fileCompressedPath });
});

// app.listen();
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));