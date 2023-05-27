const mongoose = require('mongoose')
const schema = mongoose.Schema
const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/studentmentor', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    console.log('DB Connected')
  } catch (e) {
    console.log(e.message, 'error in connecting db')
  }
}

module.exports = dbConnect
