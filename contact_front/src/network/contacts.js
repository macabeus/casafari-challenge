import { baseUrl } from './config'

const findPaginated = async (page) => {
  const response = await fetch(`${baseUrl}/contacts?page=${page}`)
  const responseJson = await response.json()

  return responseJson
}

const countPages = async () => {
  const response = await fetch(`${baseUrl}/contacts/pages-count`)
  const totalPages = await response.json()

  return totalPages
}

const findOne = async (id) => {
  const response = await fetch(`${baseUrl}/contacts/${id}`)
  const responseJson = await response.json()

  return responseJson
}

const saveOne = async ({ firstName, lastName, phone }) => {
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

const updateOne = async (id, { firstName, lastName, phone }) => {
  const data = { firstName, lastName, phone }
  const response = await fetch(`${baseUrl}/contacts/${id}`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  })

  return response
}

const deleteOne = async (id) => {
  const response = await fetch(`${baseUrl}/contacts/${id}`, {
    method: 'DELETE',
  })

  return response
}

export default {
  countPages,
  deleteOne,
  findOne,
  findPaginated,
  saveOne,
  updateOne,
}
