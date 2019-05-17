import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import AlertErrors from './alert-errors'
import ContactForm from './contact-form'
import contactsNetwork from '../network/contacts'

const AddContactModal = ({ closeModalHandle, isOpen }) => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  const saveContactHandle = async () => {
    const result = await contactsNetwork.saveOne(formData)

    if (result.ok) {
      closeModalHandle()
      setErrors({})
      return
    }

    const resultErrors = await result.json()
    setErrors(resultErrors)
  }

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Add Contact</ModalHeader>
      <ModalBody>
        <AlertErrors errors={errors} />
        <ContactForm changeFormHandle={setFormData} />
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
