import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const AddContactModal = ({ changeFormHandle, initialFormData }) => {
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

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">First Name</Label>
        <Input name="firstName" id="firstName" placeholder="Satoshi" value={formData.firstName} onChange={updateFormField} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Last Name</Label>
        <Input name="lastName" id="lastName" placeholder="Nakamoto" value={formData.lastName} onChange={updateFormField} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Telephone</Label>
        <Input name="phone" id="phone" placeholder="+55 085 99123-9876" value={formData.phone} onChange={updateFormField} />
      </FormGroup>
    </Form>
  )
}

AddContactModal.propTypes = {
  changeFormHandle: PropTypes.func,
  initialFormData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
  }),
}

AddContactModal.defaultProps = {
  changeFormHandle: () => {},
  initialFormData: {
    firstName: '',
    lastName: '',
    phone: '',
  },
}

export default AddContactModal
