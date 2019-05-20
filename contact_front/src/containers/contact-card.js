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
import Pagination from '../components/pagination'
import contactsNetwork from '../network/contacts'

const ContactCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [contacts, setContacts] = useState([])
  const [toEditContact, setToEditContact] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedContacts = await contactsNetwork.findPaginated(page)
      const fetchedTotalPages = await contactsNetwork.countPages()

      setContacts(fetchedContacts)
      setTotalPages(fetchedTotalPages)
    }

    fetchData()
  }, [modalIsOpen, page])

  if (toEditContact !== null) {
    return <Redirect push to={`/edit/${toEditContact}`} />
  }

  const onClickPaginationHandle = (newPage, isActivePage) => {
    if (isActivePage) {
      return
    }

    setPage(newPage)
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

          <Row>
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onClickPaginationHandle={onClickPaginationHandle}
            />
          </Row>
        </CardBody>
      </Card>
    </Container>
  )
}

export default ContactCard
