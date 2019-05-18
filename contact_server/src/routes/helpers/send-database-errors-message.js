const { defaultTo, map } = require('ramda')
const FieldIsRequired = require('../../errors/field-is-required')
const FieldShouldBeUniqueError = require('../../errors/field-shoud-be-unique')

const errorKindToClass = {
  required: new FieldIsRequired(),
  unique: new FieldShouldBeUniqueError(),
}

const sendDatabaseErrorsMessage = (errors, h) => {
  const errorsMapped = map(
    error => defaultTo(error, errorKindToClass[error.kind]),
    errors
  )

  const errorsMessage = map(i => i.message, errorsMapped)
  const response = h.response(errorsMessage)
  response.code(500)
  response.type('text/json')

  return response
}

module.exports = sendDatabaseErrorsMessage
