import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((res) => res.data)
}

// const create = (newObj) => {
//   const request = axios.post(baseUrl, newObj)
//   return request.then((res) => res.data)
// }
const create = async (newObj) => {
  const data = await (await fetch()).json()
  return data
}

const handleRequest = async (url, methodName, newObj) => {
  const fetchData = {
    method: methodName,
    body: newObj,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }

  try {
    // Handle response you get from the server
    const data = await (await fetch(url, fetchData)).json()
    console.log(data)
  } catch (err) {
    // Handle errors you get from the server
    console.log(err)
  }
}

const update = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj)
  return request.then((res) => res.data)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson }
