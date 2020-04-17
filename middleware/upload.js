const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, files, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        const file_name = `${Date.now()}.${file.mimetype.split("/")[1]}`
        cb(null, file_name)
    }
})
module.exports = multer({ storage })