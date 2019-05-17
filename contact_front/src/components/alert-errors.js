import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'

const AlertErrors = ({ errors }) => {
  const errorsList = Object
    .entries(errors)
    .map(([key, value]) => <li key={key}>${key}: ${value}</li>)

  if (errorsList.length === 0) {
    return null
  }

  return (
    <Alert color="danger">
      <ul>
        {errorsList}
      </ul>
    </Alert>
  )
}

AlertErrors.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
}

AlertErrors.defaultProps = {
  errors: {},
}

export default AlertErrors
