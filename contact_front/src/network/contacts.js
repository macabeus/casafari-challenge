import { baseUrl } from './config'

const fetchContacts = async () => {
  const response = await fetch(`${baseUrl}/contacts`)
  const responseJson = await response.json()

  return responseJson
}

// eslint-disable-next-line import/prefer-default-export
export { fetchContacts }
