import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import AlertErrors from '../components/alert-errors'
import ContactForm from '../components/contact-form'
import { fetchContact, updateContact, deleteContact } from '../network/contacts'

const EditContactCard = ({ match }) => {
  const {
    params: {
      id,
    },
  } = match
  const [formData, setFormData] = useState({})
  const [contacts, setContact] = useState(null)
  const [toContactList, setToContactList] = useState(null)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const fetchedContact = await fetchContact(id)
      setContact(fetchedContact)
    }

    fetchData()
  }, [id])

  const update = async () => {
    const result = await updateContact(id, formData)

    if (result.ok) {
      setToContactList(true)
      setErrors({})
      return
    }

    const resultErrors = await result.json()
    setErrors(resultErrors)
  }

  const remove = async () => {
    const result = await deleteContact(id)

    if (result.ok) {
      setToContactList(true)
      setErrors({})
      return
    }

    const resultErrors = await result.json()
    setErrors(resultErrors)
  }

  if (toContactList) {
    return <Redirect push to="/" />
  }

  if (contacts === null) {
    return <h6>Loading data...</h6>
  }

  return (
    <Container fluid>
      <Card>
        <CardHeader>Edit Contact</CardHeader>
        <CardBody>
          <AlertErrors errors={errors} />

          <ContactForm
            changeFormHandle={setFormData}
            initialFormData={contacts}
          />

          <Button color="primary" onClick={update}>Save</Button>{' '}
          <Button color="danger" onClick={remove}>Delete</Button>{' '}
          <Button onClick={() => { setToContactList(true) }}>Cancel</Button>
        </CardBody>
      </Card>
    </Container>
  )
}

EditContactCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default EditContactCard
