import React, { useState, useEffect, Fragment } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap'
import AddContactButton from '../components/add-contact-button'
import AddContactModal from '../components/add-contact-modal'
import ContactList from '../components/contact-list'
import { fetchContacts } from '../network/contacts'

const ContactCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedContacts = await fetchContacts()
      setContacts(fetchedContacts)
    }

    fetchData()
  }, [modalIsOpen])

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
              <ContactList contacts={contacts} />
            </Col>
          </Row>

        </CardBody>
      </Card>
    </Fragment>
  )
}

export default ContactCard
