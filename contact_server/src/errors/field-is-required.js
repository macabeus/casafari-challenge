class FieldIsRequired extends Error {
  constructor () {
    super('This field is required.')
  }
}

module.exports = FieldIsRequired
