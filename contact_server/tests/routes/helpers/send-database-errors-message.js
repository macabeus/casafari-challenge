const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const sendDatabaseErrorsMessage = require('../../../src/routes/helpers/send-database-errors-message')

exports.lab = Lab.script()

const {
  describe,
  it,
} = exports.lab

describe('Helper send-database-errors-message', () => {
  it('should work', async () => {
    const errors = {
      firstName: {
        message: 'Path `firstName` is required.',
      },
      phone: {
        message: 'Path `phone` is required.',
      },
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
        firstName: 'Path `firstName` is required.',
        phone: 'Path `phone` is required.',
      },
    })
  })
})
