// // Import required modules
// const express = require("express");
// const multer = require("multer");

// const app = express();

// // 🔧 Multer Storage Configuration
// const movieStorage = multer.diskStorage({
//   // 📁 Define the destination folder for uploaded files
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Files will be saved in the 'uploads' directory
//   },

//   // 🏷️ Define the filename format for saved files
//   filename: function (req, file, cb) {
//     cb(null,  file.originalname + "-" +Date.now()); // Unique filename: timestamp-originalName
//   },
// });

// // 📦 Initialize multer with the defined storage settings
// const upload = multer({ storage: movieStorage });

// module.exports=upload





// // // 🚀 API Route to handle single file upload
// // // Endpoint: POST /upload
// // // Form field name must be 'profilePic'
// // app.post("/upload", upload.single("profilePic"), (req, res) => {
// //   // 📄 req.file contains info about the uploaded file
// //   res.json({
// //     message: "File uploaded successfully",
// //     file: req.file, // Return the uploaded file data in response
// //   });
// // });




const multer = require("multer")


const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = upload