const Contact = require('../models/contact')

const findAll = () => Contact.find()

const save = ({ firstName, lastName, phone }) => {
  const contact = new Contact({ firstName, lastName, phone })
  return contact.save()
}

module.exports = {
  findAll,
  save,
}
