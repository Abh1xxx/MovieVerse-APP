const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    movieId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Movie", 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 
    },
    comment: { 
        type: String, 
        required: true 
    },
}, { timestamps: true });

module.exports = mongoose.model("Review", ReviewSchema);
