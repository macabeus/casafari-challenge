class FieldShouldBeUniqueError extends Error {
  constructor () {
    super('The value set is already in use.')
  }
}

module.exports = FieldShouldBeUniqueError
