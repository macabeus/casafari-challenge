import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const AddContactButton = ({ openModalHandle }) => (
  <Button color="primary" onClick={openModalHandle}>
    Add Contact
  </Button>
)

AddContactButton.propTypes = {
  openModalHandle: PropTypes.func,
}

AddContactButton.defaultProps = {
  openModalHandle: () => {},
}

export default AddContactButton
