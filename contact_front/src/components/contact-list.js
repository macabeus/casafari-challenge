import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table } from 'reactstrap'

const ContactList = ({ contacts, onClickRowHandle }) => {
  const contactsC = contacts.map(contact => (
    <tr key={contact.phone}>
      <th scope="row">{contact.firstName}</th>
      <td>{contact.lastName}</td>
      <td>{contact.phone}</td>
      <td>
        <Button onClick={() => { onClickRowHandle(contact.id) }}>Edit</Button>
      </td>
    </tr>
  ))

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Telephone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contactsC}
      </tbody>
    </Table>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  })),
  onClickRowHandle: PropTypes.func,
}

ContactList.defaultProps = {
  contacts: [],
  onClickRowHandle: () => {},
}

export default ContactList
