import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { useHistory, useLocation } from 'react-router-dom'
import allService from '../services/all'

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: '50px auto',
    padding: '10px 30px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export const VolunteerRegister = () => {
  const classes = useStyles()
  const { currentUser } = useContext(UserContext)
  const [volunteer, setVolunteer] = useState({
    fullName: '',
    email: '',
    date: '',
    description: '',
    volunteerList: '',
  })
  const history = useHistory()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const event = params.get('event')
  const bannerUrl = params.get('bannerUrl')

  useEffect(() => {
    if (currentUser) {
      setVolunteer({
        ...volunteer,
        fullName: currentUser.displayName,
        email: currentUser.email,
        volunteerList: event,
      })
    }
  }, [currentUser])

  const handleChange = (e) => {
    const { name, value } = e.target
    setVolunteer({ ...volunteer, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    allService
      .createVolunteer({ ...volunteer, bannerUrl })
      .then((savedVolunteer) => {
        history.replace('/profile')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Register as a Volunteer
          </Typography>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={volunteer.fullName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={volunteer.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Date"
            name="date"
            value={volunteer.date}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={volunteer.description}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Event Name"
            name="volunteerList"
            value={volunteer.volunteerList}
            onChange={handleChange}
          />
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
