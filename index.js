var express = require('express');
var cors = require('cors');
var multer = require('multer');
const path = require('path');
require('dotenv').config()

const fileStorage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, path.join(__dirname, 'uploads'));
  },
  /**
   * 
   * Utilised this strategy in order to find a way to make sure each file had
   * uniqueue names. 
   * In the Github, you can see a SC of the Images being uploaded
   * to the directory once I send the file!
   * 
   */
  filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
  }
})


const upload = multer({storage: fileStorage});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


/**
 * okay, now we have multer downloaded on the computer,
 * now will deal with uploading values
 */
app.post("/api/fileanalyse", upload.single("upfile"), function(req, res) {
  if (!req.file) {
      res.send("Make sure that you submit a valid file to the database");
  }
    res.send({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
});


app.post("/api/filesanalyse", upload.array("upfiles", 5), function(req, res) {
  if (!req.files) {
    res.send("Make sure to upload correct files to here");
  }
  let count = 1;
  object = {}
  for (let i = 0; i < req.files.length; i++) {
      object[i + 1] = {name: req.files[0].originalname, type: req.files[0].mimetype, size: req.files[0].size};
  }
  /**
   * Note all objects in JS require a K-V pair
   */
  res.json(object);
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
