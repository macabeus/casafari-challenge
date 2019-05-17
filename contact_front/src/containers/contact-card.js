import React, { useState, useEffect } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
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
    return <Redirect push to={`/edit/${toEditContact}`} />
  }

  return (
    <Container fluid>
      <AddContactModal
        isOpen={modalIsOpen}
        closeModalHandle={() => setModalIsOpen(false)}
      />

      <Card>
        <CardHeader>Contact List</CardHeader>
        <CardBody>
          <Row>
            <Col style={{ padding: '.5rem' }}>
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
    </Container>
  )
}

export default ContactCard
