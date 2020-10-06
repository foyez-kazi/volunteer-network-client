import axios from 'axios'

const baseUrl = 'https://foyez-volunteer-network.herokuapp.com/api'

const getEvents = () => {
  const request = axios.get(`${baseUrl}/events`)
  return request.then((res) => res.data)
}

const createEvent = (newObj) => {
  const request = axios.post(`${baseUrl}/events`, newObj)
  return request.then((res) => res.data)
}

const createVolunteer = (newObj) => {
  const request = axios.post(`${baseUrl}/volunteers`, newObj)
  return request.then((res) => res.data)
}

const getVolunteers = () => {
  const request = axios.get(`${baseUrl}/volunteers`)
  return request.then((res) => res.data)
}

const getVolunteersByEmail = (email) => {
  const request = axios.get(`${baseUrl}/volunteers/${email}`)
  return request.then((res) => res.data)
}

const deleteVolunteer = (id) => {
  const request = axios.delete(`${baseUrl}/volunteers/${id}`)
  return request.then((res) => res.data)
}

export default {
  getEvents,
  createEvent,
  createVolunteer,
  getVolunteers,
  getVolunteersByEmail,
  deleteVolunteer,
}
