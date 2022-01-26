const multer = require('multer');
const path = require('path');
const { staticPath } = require('../config/config');

//const upload = multer({ dest: path.join(staticPath, '/images') });
// проблема multer
// генерирует нечто такое sd7fs8df8787fs8d7f6sd87f6sd87f без расширения!!!
//настройки : filename, destination

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(staticPath, '/images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
// "фильтр"

REGEXP_MIMETYPES = /^image\/(gif|jpeg|jpg|png)/;
function filterFiles(req, file, cb) {
  //if (file.mimetype === '/image/jpg') {
  //  cb(null, false);
  //}
  cb(null, REGEXP_MIMETYPES.test(file.mimetype));
}

const upload = multer({ storage: storage, fileFilter: filterFiles });

module.exports = upload;