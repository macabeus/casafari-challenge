const sendDatabaseErrorsMessage = require('./helpers/send-database-errors-message')

const buildContactsToReponse = contact => ({
  id: contact.id,
  firstName: contact.firstName,
  lastName: contact.lastName,
  phone: contact.phone,
  createdAt: contact.createdAt,
  updatedAt: contact.updatedAt,
})

const routeSpecGet = server => ({
  method: 'GET',
  path: '/contacts',
  handler: async (request, h) => {
    const { db } = server.app
    const findAllResult = await db.contacts.findAll()

    const resultMapped = findAllResult.map(buildContactsToReponse)

    const response = h.response(resultMapped)
    response.type('text/json')

    return response
  },
})

const routeSpecPost = server => ({
  method: 'POST',
  path: '/contacts',
  handler: async (request, h) => {
    const { db } = server.app
    const { firstName, lastName, phone } = request.payload

    let saveResult
    try {
      saveResult = await db.contacts.save({ firstName, lastName, phone })
    } catch ({ errors }) {
      return sendDatabaseErrorsMessage(errors, h)
    }

    const resultMapped = buildContactsToReponse(saveResult)

    const response = h.response(resultMapped)
    response.code(201)
    response.type('text/json')

    return response
  },
})

module.exports = [
  routeSpecGet,
  routeSpecPost,
]
