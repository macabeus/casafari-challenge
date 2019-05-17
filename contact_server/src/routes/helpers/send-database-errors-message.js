const { map } = require('ramda')

const sendDatabaseErrorsMessage = (errors, h) => {
  const errorsMessage = map(i => i.message, errors)
  const response = h.response(errorsMessage)
  response.code(500)
  response.type('text/json')

  return response
}

module.exports = sendDatabaseErrorsMessage
