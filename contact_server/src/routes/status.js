const routeSpec = ({
  method: 'GET',
  path: '/status',
  handler: (request, h) => {
    const response = h.response('"ok"')
    response.type('text/json')

    return response
  },
})

module.exports = routeSpec
