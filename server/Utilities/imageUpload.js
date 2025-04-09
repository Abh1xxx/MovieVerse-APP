const cloudinary=require("../config/cloudinary")

const uploadToCloudinary = (filePath) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            filePath,
            { folder: 'Movies Poster' },
            (error, result) => {
                if (error) return reject(error)
                resolve(result.secure_url)
            }
        )
    })
}

module.exports = uploadToCloudinary