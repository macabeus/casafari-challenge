import { baseUrl } from './config'

const fetchContacts = async () => {
  const response = await fetch(`${baseUrl}/contacts`)
  const responseJson = await response.json()

  return responseJson
}

const saveContact = async ({ firstName, lastName, phone }) => {
  const data = { firstName, lastName, phone }
  const response = await fetch(`${baseUrl}/contacts`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  return response
}

export { fetchContacts, saveContact }
