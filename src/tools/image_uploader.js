const multer  = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      const dir = './uploads';
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      cb(null, dir);
    },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

const upload = multer({storage: storage}).single('image');
module.exports = upload;