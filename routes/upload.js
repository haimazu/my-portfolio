const router = require("express").Router();
const cloudinary = require("cloudinary");
const fs = require("fs");

// Upload images to cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload image
router.post("/upload", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No file were uploaded." });
    }

    const file = req.files.file;

    if (file.size > 1024 * 1024) {
      // 1mb
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File is too big." });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect." });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "portfolio/projects" },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);
        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Delete image
router.post("/destroy", (req, res) => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      res.status(400).json({ msg: "No image selected." });
    }

    cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
      if (err) throw err;

      res.json({ msg: "Image was deleted" });
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
