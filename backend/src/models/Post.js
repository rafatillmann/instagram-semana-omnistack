const mongoose = require('mongoose');

const PostShema = mongoose.Schema({ //create a new post in database
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostShema);