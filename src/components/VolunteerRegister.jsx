import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

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
  const [volunteer, setVolunteer] = useState({
    fullName: '',
    usernameOrEmail: '',
    date: '',
    description: '',
  })
  const location = useLocation()

  const params = new URLSearchParams(location.search)
  const event = params.get('event')

  const handleChange = (e) => {
    const { name, value } = e.target
    setVolunteer({ ...volunteer, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ ...volunteer, event })
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
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Username or Email"
            name="usernameOrEmail"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Date"
            name="date"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
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
