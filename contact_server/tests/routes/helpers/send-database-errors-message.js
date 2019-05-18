const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const sendDatabaseErrorsMessage = require('../../../src/routes/helpers/send-database-errors-message')

exports.lab = Lab.script()

const {
  describe,
  it,
} = exports.lab

describe('Helper send-database-errors-message', () => {
  it('should return a formatted error message', async () => {
    const errors = {
      firstName: { kind: 'required' },
      phone: { kind: 'unique' },
      unknown: { kind: 'unknown', message: 'unknown error message' },
    }

    const hMock = {
      response: errorMessage => ({
        responseResult: errorMessage,
        code (input) { this.code = input },
        type (input) { this.type = input },
      }),
    }

    const result = sendDatabaseErrorsMessage(errors, hMock)

    expect(result).to.equal({
      code: 500,
      type: 'text/json',
      responseResult: {
        firstName: 'This field is required.',
        phone: 'The value set is already in use.',
        unknown: 'unknown error message',
      },
    })
  })
})
