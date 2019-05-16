const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: String,
  phone: {
    type: String,
    unique: true,
    required: true,
  },
}, { timestamps: true })

contactSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' })
const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
