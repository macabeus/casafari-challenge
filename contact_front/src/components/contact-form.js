import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap'

const AddContactModal = ({ changeFormHandle, errors, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData)

  const updateFormField = (event) => {
    const { name, value } = event.target

    const newFormDataState = {
      ...formData,
      [name]: value,
    }

    changeFormHandle(newFormDataState)
    setFormData(newFormDataState)
  }

  const inputHasInvalidValue = inputName => errors[inputName] !== undefined

  const getErrorForInput = inputName => (
    <FormFeedback>
      {errors[inputName]}
    </FormFeedback>
  )

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">First Name</Label>
        <Input
          name="firstName"
          id="firstName"
          placeholder="Satoshi"
          value={formData.firstName}
          onChange={updateFormField}
          invalid={inputHasInvalidValue('firstName')}
        />
        {getErrorForInput('firstName')}
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Last Name</Label>
        <Input
          name="lastName"
          id="lastName"
          placeholder="Nakamoto"
          value={formData.lastName}
          onChange={updateFormField}
          invalid={inputHasInvalidValue('lastName')}
        />
        {getErrorForInput('lastName')}
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">Telephone</Label>
        <Input
          name="phone"
          id="phone"
          placeholder="+55 085 99123-9876"
          value={formData.phone}
          onChange={updateFormField}
          invalid={inputHasInvalidValue('phone')}
        />
        {getErrorForInput('phone')}
      </FormGroup>
    </Form>
  )
}

AddContactModal.propTypes = {
  changeFormHandle: PropTypes.func,
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
  }),
  initialFormData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
  }),
}

AddContactModal.defaultProps = {
  changeFormHandle: () => {},
  errors: {},
  initialFormData: {
    firstName: '',
    lastName: '',
    phone: '',
  },
}

export default AddContactModal
