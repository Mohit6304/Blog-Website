import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  if (req.file && req.file.filename) {
    // Access the filename property if req.file is defined
    const filename = req.file.filename;
    res.status(200).json(filename);
  } else {
    // Return the default image URL
    const defaultImageURL = "https://drive.google.com/uc?id=1yK1dux0gc1nelB6p13RKXlXMi_e_3F4A";
    res.status(200).json(defaultImageURL);
  }
});



app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
