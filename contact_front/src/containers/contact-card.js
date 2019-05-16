import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap'
import AddContactButton from '../components/add-contact-button'
import ContactList from '../components/contact-list'

const ContactCard = () => (
  <Card>
    <CardHeader>Contact List</CardHeader>
    <CardBody>

      <Row>
        <Col sm={{ offset: 11, size: 'auto' }} style={{ padding: '.5rem' }}>
          <AddContactButton />
        </Col>
      </Row>

      <Row>
        <Col>
          <ContactList />
        </Col>
      </Row>

    </CardBody>
  </Card>
)

export default ContactCard
