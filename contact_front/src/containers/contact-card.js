import React, { useState, useEffect, Fragment } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import AddContactButton from '../components/add-contact-button'
import AddContactModal from '../components/add-contact-modal'
import ContactList from '../components/contact-list'
import { fetchContacts } from '../network/contacts'

const ContactCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [contacts, setContacts] = useState([])
  const [toEditContact, setToEditContact] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedContacts = await fetchContacts()
      setContacts(fetchedContacts)
    }

    fetchData()
  }, [modalIsOpen])

  if (toEditContact !== null) {
    return <Redirect to={`/edit/${toEditContact}`} />
  }

  return (
    <Fragment>
      <AddContactModal
        isOpen={modalIsOpen}
        closeModalHandle={() => setModalIsOpen(false)}
      />

      <Card>
        <CardHeader>Contact List</CardHeader>
        <CardBody>
          <Row>
            <Col sm={{ offset: 11, size: 'auto' }} style={{ padding: '.5rem' }}>
              <AddContactButton openModalHandle={() => setModalIsOpen(true)} />
            </Col>
          </Row>

          <Row>
            <Col>
              <ContactList
                contacts={contacts}
                onClickRowHandle={setToEditContact}
              />
            </Col>
          </Row>

        </CardBody>
      </Card>
    </Fragment>
  )
}

export default ContactCard
