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
    const result = await db.contacts.save({ name, lastName, phone })

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
