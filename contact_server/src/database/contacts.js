const Contact = require('../models/contact')

const findAll = () => Contact.find()

const save = ({ name, lastName, phone }) => {
  const contact = new Contact({ name, lastName, phone })
  return contact.save()
}

module.exports = {
  findAll,
  save,
}
