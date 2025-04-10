const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: true ,
        min:3,
        max:15,
        trim: true 
        },
    email:{ 
            type: String,
            required: true, 
            unique: true ,
            match: [/.+\@.+\..+/, "Please enter a valid email address"]
        },
    password: { 
        type: String, 
        required: true 
    },
    profilePic: { 
                type: String, 
                default: "c:\Users\Abhi\AppData\Local\Temp\title1.webp" }, // Store image URL or file path
    role: {
         type: String, 
         enum: ["user", "admin"],  // Admin or normal user
         default: "user"
         },
    watchlist: [
                {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Movie",
                },
            ],
          
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
