import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { fetchContacts } from '../network/contacts'

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedContacts = await fetchContacts()
      setContacts(fetchedContacts)
    }

    fetchData()
  }, [])

  const contactsC = contacts.map(contact => (
    <tr key={contact.phone}>
      <th scope="row">{contact.name}</th>
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
