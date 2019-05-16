const sendDatabaseErrorsMessage = require('./helpers/send-database-errors-message')

const routeSpecGet = server => ({
  method: 'GET',
  path: '/contacts',
  handler: async (request, h) => {
    const { db } = server.app
    const result = await db.contacts.findAll()

    const response = h.response(result)
    response.type('text/json')

    return response
  },
})

const routeSpecPost = server => ({
  method: 'POST',
  path: '/contacts',
  handler: async (request, h) => {
    const { db } = server.app
    const { name, lastName, phone } = request.payload

    let result
    try {
      result = await db.contacts.save({ name, lastName, phone })
    } catch ({ errors }) {
      return sendDatabaseErrorsMessage(errors, h)
    }

    const response = h.response(result)
    response.code(201)
    response.type('text/json')

    return response
  },
})

module.exports = [
  routeSpecGet,
  routeSpecPost,
]
