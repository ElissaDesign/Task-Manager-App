const mongoose = require('mongoose');
require('')

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB