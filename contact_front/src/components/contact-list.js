import React from 'react'
import { Table } from 'reactstrap'

const ContactList = ({ contacts }) => {
  const contactsC = contacts.map(contact => (
    <tr key={contact.phone}>
      <th scope="row">{contact.firstName}</th>
      <td>{contact.lastName}</td>
      <td>{contact.phone}</td>
    </tr>
  ))

  return (
    <Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Telephone</th>
        </tr>
      </thead>
      <tbody>
        {contactsC}
      </tbody>
    </Table>
  )
}

export default ContactList
