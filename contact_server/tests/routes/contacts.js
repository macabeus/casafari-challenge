const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const { init } = require('../../src/server')

const findAllResult = [
  {
    _id: '5cdb88af9d3797049aec5457',
    name: 'pikachu',
    lastName: 'pika',
    phone: '085',
  },
]

const saveResult = {
  _id: '111111111111111111111111',
  name: 'saving',
  lastName: 'savingLastName',
  phone: '+55',
}

const mockAppDbMethods = {
  contacts: {
    findAll: () => findAllResult,
    save: () => saveResult,
  },
}

exports.lab = Lab.script()

const {
  afterEach,
  beforeEach,
  describe,
  it,
} = exports.lab

describe('Route /contacts', () => {
  let server

  beforeEach(async () => {
    server = await init(mockAppDbMethods)
  })

  afterEach(async () => {
    await server.stop()
  })

  it('should result success when receives a GET request', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/contacts',
    })

    expect(res.statusCode).to.equal(200)
    expect(res.result).to.equal(findAllResult)
  })

  it('should result success when receives a POST request', async () => {
    const res = await server.inject({
      method: 'post',
      url: '/contacts',
      payload: saveResult,
    })

    expect(res.statusCode).to.equal(201)
    expect(res.result).to.equal(saveResult)
  })
})