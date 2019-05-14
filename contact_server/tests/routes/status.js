const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const { init } = require('../../src/server')

exports.lab = Lab.script()

const {
  afterEach,
  beforeEach,
  describe,
  it,
} = exports.lab

describe('Route /status', () => {
  let server

  beforeEach(async () => {
    server = await init()
  })

  afterEach(async () => {
    await server.stop()
  })

  it('should result success when receives a GET request', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/status',
    })

    expect(res.statusCode).to.equal(200)
    expect(res.result).to.equal('"ok"')
  })
})
