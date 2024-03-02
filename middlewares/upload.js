const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "avatars",
      allowed_formats: ["jpg", "png"],
      public_id: file.originalname,
      transformation: [{ width: 150, height: 150 }],
    };
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("File is not an image"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
