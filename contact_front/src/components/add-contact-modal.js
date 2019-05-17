import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form, FormGroup, Label, Input,
} from 'reactstrap'
import AlertErrors from './alert-errors'
import { saveContact } from '../network/contacts'

const AddContactModal = ({ closeModalHandle, isOpen }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    telephone: '',
  })
  const [errors, setErrors] = useState({})

  const saveContactHandle = async () => {
    const result = await saveContact(formData)

    if (result.ok) {
      closeModalHandle()
      setErrors({})
      return
    }

    const resultErrors = await result.json()
    setErrors(resultErrors)
  }

  const updateFormField = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Add Contact</ModalHeader>
      <ModalBody>
        <AlertErrors errors={errors} />
        <Form>
          <FormGroup>
            <Label for="exampleEmail">First Name</Label>
            <Input name="firstName" id="firstName" placeholder="Satoshi" onChange={updateFormField} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Last Name</Label>
            <Input name="lastName" id="lastName" placeholder="Nakamoto" onChange={updateFormField} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Telephone</Label>
            <Input name="phone" id="phone" placeholder="+55 085 99123-9876" onChange={updateFormField} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveContactHandle}>Save new contact</Button>{' '}
        <Button color="secondary" onClick={closeModalHandle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

AddContactModal.propTypes = {
  closeModalHandle: PropTypes.func,
  isOpen: PropTypes.bool,
}

AddContactModal.defaultProps = {
  closeModalHandle: () => {},
  isOpen: false,
}

export default AddContactModal
