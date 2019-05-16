const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  phone: String,
}, { timestamps: true })

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
