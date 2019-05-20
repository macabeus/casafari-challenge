const {
  filter,
  pipe,
  isNil,
  not,
} = require('ramda')
const Contact = require('../models/contact')

const PAGE_LIMIT = 3

const findAll = () => Contact.find()

const countPages = async () => {
  const count = await Contact.count()
  const pages = Math.ceil(count / PAGE_LIMIT)

  return pages
}

const findOne = id => Contact.findById(id)

const saveOne = ({ firstName, lastName, phone }) => {
  const contact = new Contact({ firstName, lastName, phone })
  return contact.save()
}

const updateOne = (id, dataToUpdate) => {
  const dataFiltered = filter(
    pipe(isNil, not),
    dataToUpdate
  )

  return Contact.findByIdAndUpdate(id, dataFiltered, { new: true })
}

const deleteOne = id => Contact.deleteOne({ _id: id })

module.exports = {
  findAll,
  countPages,
  findOne,
  saveOne,
  updateOne,
  deleteOne,
}
